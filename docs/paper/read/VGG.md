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



