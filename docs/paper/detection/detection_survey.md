# 目标检测综述

## 目标检测任务及发展脉络

https://arxiv.org/pdf/1905.05055.pdf

![https://arxiv.org/pdf/1905.05055.pdf](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804212320.png)

### 基于深层神经网络的目标检测

- 双阶段(two-stage)：第一级网络用于候选区域提取;第二级网络对提取的候选区域进行分类和精确坐标回归，例如RCNN系列。
- 单阶段(one-stage)：掘弃了候选区域提取这一步骤，只用一级网络就完成了分类和回归两个任务，例如YOLO和SSD等。

### 实验结果

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804212617.png)



## 目标检测基础库

mmcv

mmdetection



## 标注工具

https://github.com/tzutalin/labelImg
