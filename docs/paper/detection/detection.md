# 目标检测算法盘点



## One-stage

直接回归物体的类别概率和位置坐标值（无region proposal），但准确度低，速度相比two-stage快。

- YOLO

- SSD
- YOLO v2
- YOLO v3
- YOLO v4
- BSSD
- FSSD
- ESSD
- DES



## two-stage

先由算法生成一系列作为样本的候选框，再通过卷积神经网络进行样本分类。

对于Two-stage的目标检测网络，主要通过一个卷积神经网络来完成目标检测过程，其提取的是CNN卷积特征，在训练网络时，其主要训练两个部分，第一步是训练RPN网络，第二步是训练目标区域检测的网络。网络的准确度高、速度相对One-stage慢。

 

- RCNN

- SPPNet
- Fast RCNN
- Faster RCNN
- RetinaNet
- Mask RCNN
- Cascade RCNN

## Anchor Free

- CornorNet
- CenterNet
- FCOS



Transfermer Based





## 参考



[干货 | 深度学习时代的目标检测算法](https://blog.csdn.net/AMDS123/article/details/79474096?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7.no_search_link)