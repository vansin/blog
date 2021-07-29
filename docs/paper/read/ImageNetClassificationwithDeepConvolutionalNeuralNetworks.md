# ImageNet Classification with Deep Convolutional Neural Networks

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728181749.png)


## 复现技巧

### dockerfile

```shell
FROM tensorflow/tensorflow:1.10.0-devel-gpu-py3
RUN apt-get update \
    && apt-get install -y libsm6 \
    && apt-get install -y libxrender1 \
    && apt-get install -y libxext-dev \
    && apt-get install -y libgl1-mesa-glx
RUN pip install --upgrade pip \
    && pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/ \
    && pip install jupyterlab \
    && pip install matplotlib \
    && pip install opencv-python
```

```shell
docker build -t alexnet:v2 
```

### 命令行启动docker

```shell
docker run --gpus all --rm -ti --ipc=host -v $(pwd):/app -P alexnet:v2 /bin/bash
```

### pycharm debug


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210729145045.png)



### 开启tensorboard

进入某个运行的容器去开启tensorboard

```shell
docker exec -it great_swirles bash
```

## 图像分类问题

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728172303.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728172321.png)



### 背景、成果及意义

机器学习领域

- 特征提取
- 特征筛选
- 输入分类器

深度学习领域

特征的提取、筛选和分类集成于一体

什么是特征

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728172455.png)



### 未来技术研究趋势

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728172546.png)


- AlxNet
- VGG
- GoogleLeNet
- ResNet
- mobilenet/ShuffleNet
- 自动化搜索 Auto L

### 前期知识储备

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728172747.png)


- TensorFlow的使用及语法特点
- CNN
  - RELU
  - POLING
- 图像分类问题
  - 了解图像分类的概念
  - 掌握神经网络分类的流程
- softmax和交叉熵的概念
  - 了解softmax如何计算
  - 掌握softmax用于多分类的原理 


## 第二节

### 论文整体框架

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182055.png)

#### 摘要

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182353.png)


#### Relu

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182443.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182505.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182619.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182651.png)

#### Sigmoid非线性单元

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182751.png)


#### dropout

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728182906.png)

1 =  keep_prob + rate


### 神经网络处理图像分类问题流程

#### 训练阶段

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728183107.png)

- 训练集
- 验证集
- 测试集


交叉熵作为损失函数-->反向传播

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728183452.png)

#### 测试阶段

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728183711.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728183859.png)

### 网络结构及部分参数计算

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728184049.png)



网络最后一层

#### 卷积知识

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728191226.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728191612.png)

### 网络超参数及训练

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728191946.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728192102.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728192125.png)

### 网络特点


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728192228.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728192338.png)


### 作业

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728192405.png)


## 第三节

### 图像基础内容

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728194502.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728194828.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728195922.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210728200123.png)



