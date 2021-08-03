# VGG

[TOC]

## 模型对比

| 模型        | 模型大小 | 训练时长                   | kaggle猫狗分类分数/排名 |
| ----------- | -------- | -------------------------- | ----------------------- |
| AlexNet     | 228.1MB  | 20min/3Epoch(需要重新测量) | 0.97814(1113)           |
| VGG         | 537.1MB  | 30min/3Epoch(需要重新测量) | 0.41999(907)            |
| googleLeNet | 53 MB    |                            |                         |



## 环境搭建

使用dockerfile搭建训练和测试环境

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

构建镜像

```shell
docker build -t vgg_pytorch:1.4_0 .
```

## 训练技巧

尺度扰动

## 保存模型

```python
torch.save(alexnet_model.state_dict(),'../data/self_train.pth')
```


```python
torch.save(alexnet_model,'../data/self_train.pth')
```

## 测试结果导出

```python	
import pandas as pd
dataframe = pd.DataFrame.from_dict(csv_list)
dataframe.to_csv('../7.csv',index=False)
```



## 网络结构

### 池化层作用

池化层主要作用是缩小矩阵尺寸，减少参数，起到了加速计算同时防止过拟合的作用。与卷积层类似，池化层也有一个类似过滤器的结构，并且也有步长的概念。池化层主要分为最大池化层(max pooling)和平均池化层(average pooling)。

### **全连接层**

在整个卷积神经网络中卷积层和池化层是针对输入的特征提取，那么全连接层就起到“分类器”的作用。实现上比较简单，直接使用矩阵相乘即可。

### **Softmax 回归**

Softmax 一般用于分类问题，也可以算作是一种激活函数，作用是将最后输出结果转换为归一化的概率分布。数学公式表示为：

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210803141856.png)

### **激活函数**

我们经常会使用激活函数来去除模型的线性化，让网络可以使用更少的参数抽象更复杂的模型，常见的激活函数有 sigmoid函数、tanh函数、relu函数。

VGG-16 中使用 relu 作为激活函数，数学表示为：

relu = max(0, x)



sigmoid 与 tanh 函数的几何图像分别如下：

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210803142040.png)



