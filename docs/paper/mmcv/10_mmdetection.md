# MMDetection整理构建流程（1）



## 摘要

本文为MMdetection学习入门篇的MMdetection构建流程篇



## 经典目标检测算法



### 按照stage划分

#### tow-stage

- Faster R-CNN
- Cascade R-CNN
- Libra R-CNN
- .....

#### one-stage

- RetinaNet
- YOLO系列
- FCOS
- RepPoints
- .........



### anchor划分

#### anchor-based

- Faster RCNN
- YOLO系列

#### anchor-free

- FCOS
- .....



## MMDetection整体构建流程和思想

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211019211017.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211019211201.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211019211225.png)

### 训练核心组件

#### Backbone



#### Neck



#### Head



#### Enhance



#### BBox Assigner



#### BBox Sampler



#### BBox Encoder



#### Loss



#### Training Tricks



### 测试核心组件

#### BBox Decoder



#### BBox PostProcess



#### Testing tricks



### 训练测试算法流程

#### bbox_head.forwad_train





#### bbox_head.get_bboxes





## 参考

