# docker搭建深度学习炼丹炉

使用docker搭建深度学习炼丹炉

优势：环境崩了之后不需要繁琐的重装系统，仅需要重新运行容器
劣势：docker上手成本，debug不是很方便


## NVIDIA Container Toolkit

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
Restart the Docker daemon to complete the installation after setting the default runtime:
```shell
sudo systemctl restart docker
```
At this point, a working setup can be tested by running a base CUDA container:

```shell
sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
```

## tensorflow-docker



## pytorch-docker


## 使用pycharm调试docker


## Reference

https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#getting-started
https://www.tensorflow.org/install/docker?hl=zh-cn
