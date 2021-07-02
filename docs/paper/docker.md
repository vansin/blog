# docker搭建深度学习炼丹炉


在复现多篇论文时是否遇到以下情况
  
- 复现多篇论文时所依赖的cuda版本等环境不一样
- ubunt环境崩了之后，总是要重装系统，效率低下

使用docker搭建深度学习炼丹炉

优势：环境崩了之后不需要繁琐的重装系统，仅需要重新运行容器  
劣势：docker上手成本，debug不是很方便

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

## NVIDIA Container Toolkit

NVIDIA容器架构, windows用户不支持

[NVIDIA Container Toolkit](https://github.com/NVIDIA/nvidia-docker)
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210628142255.png)

### Ubuntu安装

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



## [tensorflow-docker](https://www.tensorflow.org/install/docker?hl=zh-cn)


### TensorFlow安装

[dockerhub](https://hub.docker.com/r/tensorflow/tensorflow/)中有各种版本的tensorflow，复现代码时只要选择对应的版本后docker pull就行

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210702085619.png)

### 其他依赖安装

新建一个Dockerfile， 把类似OpenCV等其他依赖写到Dockerfile里面，docker build镜像之后便可使用

```dockerfile
FROM tensorflow/tensorflow:1.4.0-gpu-py3
RUN pip install Keras==2.1.2 \
    && pip install numpy==1.13.3 \
    && pip install opencv-python==3.3.0.10 \
    && pip install h5py==2.7.1

RUN apt-get update \
    && apt-get install -y libsm6 \
    && apt-get install -y libxrender1 \
    && apt-get install -y libxext-dev
```

运行以下命令会发现，build过程会卡在半路，build的



Dockerfile如果包含apt，从国外源中安装依赖的命令

```shell
docker build -t .
```

## pytorch-docker

https://hub.docker.com/r/pytorch/pytorch/tags?page=1&ordering=last_updated

## pycharm调试docker和运行docker



## Reference

https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#getting-started  

https://www.tensorflow.org/install/docker?hl=zh-cn