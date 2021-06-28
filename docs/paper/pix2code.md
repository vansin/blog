# 【前端智能化】pix2code论文复现

https://github.com/vansin/pix2code


## 论文复现炼丹炉搭建

### 软硬件参数
- 操作系统：Ubuntu 20.04
- CPU：XEON
- RAM： 128G
### 论文code环境

- Keras==2.1.2
- numpy==1.13.3
- opencv-python==3.3.0.10
- h5py==2.7.1
- tensorflow==1.4.0

### 环境搭建

> 以下步骤基于docker和NVIDIA Container Toolkit都安装好的基础上

```shell
docker pull tensorflow/tensorflow:1.4.0-gpu-py3
```

打开Pycharm选择对应的docker镜像

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210628145232.png)


## 论文笔记

### 摘要

Transforming a graphical user interface screenshot created by a designer into computer code is a typical task conducted by a developer in order to build customized software, websites, and mobile applications. In this paper, we show that deep learning methods can be leveraged to train a model end-to-end to automatically

generate code from a single input image with over 77% of accuracy for three different platforms (i.e. iOS, Android and web-based technologies).

将设计师的设计图纸生成对应的Web、IOS和Android对应的代码，通过使用深度学习的方式，在三个不同的平台生成代码的准确率超过77%。

### 介绍

### 相关工作

### pix2code

#### 视觉模型


#### 解码器


#### 训练 


#### Sampling


### Experiments

### 总结和讨论
