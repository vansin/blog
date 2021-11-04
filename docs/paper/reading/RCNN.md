

# RCNN系列算法解析



首次将CNN引入到目标检测领域，UC Berkeley出品

以往的特征提取往往使用SIFT 和 HOG方法

最开始滑动窗口的算法



## 前置知识

IOU

## 早期方法





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104100041.png)

随机生成1w个框进行分类

如何选择框？多少？多大？

## RCNN

2014年，RBG使用Region Proposal+CNN代替传统目标检测使用的滑动窗口+手工设计特征，设计了R-CNN框架

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/未命名文件(1) (1).png)

https://kdocs.cn/l/shUqxeO0F3Dj



### Selective Search

利用颜色，纹理，大小，形状吻合相似度，来选择候选区域

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104104135.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104104156.png)



Selective Search Region

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104080650.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104080710.png)





### 方法

1、SS提取RP；

2、CNN提取特征；

3、SVM分类；

4、BBox回归 ;

### 缺点



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104135212.png)

1、不论是训练或 训练步骤繁琐（微调网络+训练SVM+训练bbox）；

2、 训练、[测试](http://lib.csdn.net/base/softwaretest)均速度慢 ；

3、 训练占空间



### 改进

1、 从DPM HSC的34.3%直接提升到了66%（mAP）；

2、 引入RP+CNN



## Fast RCNN



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104141304.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104135336.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104135526.png)



### ROI Pooling

ROI Pooling转换为 16x16的

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104135843.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104135943.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104140125.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104092333.png)





### 实验结果

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104141349.png)



### Fast RCNN存在的问题



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104141731.png)







## Faster RCNN

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104141833.png)

### RPN

RPN并不比Selective Search计算量少，但是能够用GPU进行加速

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104141922.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104092743.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104142957.png)



### 先验框

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104092422.png)



o





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104143441.png)



### Loss函数

### 

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104143542.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104143732.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104143849.png)

### 实验结果

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104144444.png)



### 实验代码



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211104143954.png)



## Reference

[Mendeley笔记地址](https://www.mendeley.com/reference-manager/reader/b3c0cbeb-aa1c-3938-90df-5afa4911da2c/1da533d9-f596-1667-341e-1b0dc7272d10)

[Rich feature hierarchies for accurate object detection and semantic segmentation](https://arxiv.org/abs/1311.2524)

[视频地址1](https://www.youtube.com/watch?v=M1mN03REGU8)

