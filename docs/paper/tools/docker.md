# docker搭建深度学习炼丹炉

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/dang1.png)

## 前言

### 什么场景下需要？

在深度学习的炼丹过程中，业界普遍使用的TensorFlow和Pytorch往往需要通过NVIDIA的GPU进行模型训练的加速。其并行加速最重要的依赖是NVIDIA开发的**cuda-toolkit**软件包

学术界paper对应代码中依赖的TensorFlow和Pytorch的版本和其所依赖往往错综复杂，Anaconda的虚拟环境虽然能解决TensorFlow和Pytorch版本不同的问题，却不能方便解决**cuda-toolkit**版本不同的问题，如果多篇论文复现或实现所依赖的**cuda-toolkit**的版本有冲突，往往需要重装系统，费时费力。

本文通过docker在Ubuntu等Linux上搭建深度学习炼丹炉的方法，能好的解决以上问题，让科研工作者把时间投入更重要的算法和模型优化上。

### 原理


用户只要在Linux系统中安装好显卡驱动，不需要安装**cuda-toolkit**，**cuda-toolkit**、TensorFlow和Pytorch都在docker容器中

[NVIDIA Container Toolkit](https://github.com/NVIDIA/nvidia-docker)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210628142255.png)
<p align="center">docker炼丹炉的原理架构图</p>


### nvidia支持系统要求

gpu版本的docker炼丹炉支持以下OS，基本上只支持Linux

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702191954.png)

## docker安装

[更多详细过程参考](https://yeasy.gitbook.io/docker_practice/install/ubuntu)

### 脚本安装方法

```sh 
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

### 启动docker

```shell
sudo systemctl enable docker
sudo systemctl start docker
```

### 建立 docker 用户组

默认情况下，docker 命令会使用 Unix socket 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组。

建立 docker 组：

```shell
sudo groupadd docker
```

将当前用户加入 docker 组：

```shell
sudo usermod -aG docker ${USER}
```

```shell
sudo systemctl restart docker
su root
su ${USER}
```

测试 Docker 是否安装正确
```shell
docker run --rm hello-world
```


### 镜像加速

- [阿里云加速器(点击管理控制台 -> 登录账号(淘宝账号) -> 右侧镜像中心 -> 镜像加速器 -> 复制地址](https://www.aliyun.com/product/acr?source=5176.11533457&userCode=8lx5zmtu)

### NVIDIA Container Toolkit

[官网安装教程](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#getting-started)

NVIDIA容器架构, windows用户不支持，以下以ubuntu为例展示

Setup the stable repository and the GPG key:

```shell
distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
   && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
   && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

Install the nvidia-docker2 package (and dependencies) after updating the package listing:

```shell
sudo apt-get update
```


```shell
sudo apt-get install -y nvidia-docker2
```

/etc/docker/daemon.json需要出现以下内容

设置默认的runtime为nvidia

```json
{
    "default-runtime": "nvidia",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

Restart the Docker daemon to complete the installation after setting the default runtime:

```shell
sudo systemctl restart docker
```

At this point, a working setup can be tested by running a base CUDA container:

```shell
sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
```

## 镜像准备(pytorch tensorflow)

基本上所有大部分的深度学习开源代码依赖的是各个版本的TensorFlow和Pytorch，我们只需要将代码所依赖的

### pytorch-docker

拉取所有的pytorch版本的docker到本地

- 假设10MB/s的网速，拉取4GB大小的镜像需要6分钟
- 如果是2MB/s的网速，拉取一个镜像需要30min

拉取到所有的pytorch版本到本地磁盘，可以大大减少等待docker镜像的拉取时间

```shell
docker pull -a pytorch:pytorch
```

https://hub.docker.com/r/pytorch/pytorch/tags?page=1&ordering=last_updated

### [tensorflow-docker](https://www.tensorflow.org/install/docker?hl=zh-cn)

#### 拉取所有版本的docker

```python
docker pull -a tensorflow:tensorflow
```


#### 特定版本TensorFlow镜像拉取

[dockerhub](https://hub.docker.com/r/tensorflow/tensorflow/)中有各种版本的tensorflow，复现代码时只要选择对应的版本后docker pull就行

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702085619.png)



### dockerfile安装其他依赖

新建一个Dockerfile， 把类似OpenCV等其他依赖写到Dockerfile里面，docker build镜像之后便可使用

- apt换源
- pip换源
- 安装所需依赖

```dockerfile
FROM pytorch/pytorch:1.4-cuda10.1-cudnn7-devel
RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list \
    && apt-get clean \
    && apt-get update \
    && apt-get install -y libsm6 \
    && apt-get install -y libxrender1 \
    && apt-get install -y libxext-dev \
    && apt-get install -y libgl1-mesa-glx
RUN pip install --upgrade pip \
    && pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/ \
    && pip install jupyterlab \
    && pip install matplotlib \
    && pip install opencv-python \
    && pip install pillow \
    && pip install torchsummary \
    && pip install pandas

```


Dockerfile如果包含apt等从国外源中安装依赖的命令，其过程会很慢甚至会卡住，其解决方案可以是挂载代理（挖坑后续文章）或使用阿里云镜像服务的海外机器进行构建（挖坑后续文章）

```shell
docker build -t dockerImageName:version .
```

### 



## pycharm调试docker中运行的程序

### 设置Python环境镜像

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702190850.png)


### 设置run debug configuration

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702191156.png)

```shell
--entrypoint -v /home/tml/vansin/paper/pix2code:/opt/project --rm
```

以上的配置为挂载本地的文夹到docker目录，让训练好的数据保存在本地，而不是docker中


打断点之后可以进行debug
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702191431.png)





## 命令行运行docker命令

docker 默认关闭挂载的功能，需要docker run时加上如下命令

--privileged=true 

```shell
docker run --gpus all --rm -ti --ipc=host --privileged=true -v $(pwd):/app fangshancheng/fastai:torch1.1 /bin/bash 
```

## docker挂载群辉数据集

```shell
sudo apt-get update
sudo apt install cifs-utils
```

```shell
sudo mkdir /datasets
```

```shell
mount.cifs //192.168.4.21/datasets /datasets -o user=vansin,pass=****,vers=2.0 

# Ipv6
mount -t cifs -o username=vansin,password=Mon******* //fdb0:ccfe:e630:fe00:211:32ff:fee9:f706/datasets /datasets
```

[原始参考链接](https://blog.csdn.net/qq_18951197/article/details/108255853)



## docker运行GUI软件

https://github.com/anibali/docker-pytorch

```shelol
docker run --rm -it --init \
  --gpus=all \
  -e "DISPLAY" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" \
  anibali/pytorch python3 -c "import tkinter; tkinter.Tk().mainloop()"

```





## 使用docker的弊端

- matplotlib、opencv的GUI显示在debug模式下实现不方便



## 总结

使用docker搭建深度学习的炼丹炉能够大大提高论文的效率

如果想要加速实验室所有成员的镜像拉取速度，可以在本地搭建一个docker镜像仓库，本地的千兆局域网能大大加速镜像的拉取