# Faster R-CNN

## 论文研究背景、成果意义






图像处理三大任务：

物体识别、 目标检测、 图像分割

目标检测： 给定一张图像， 判断图像中 是否存在指定类别的目标， 若存在， 则输 出目标位置、 类别及置信度。

目标检测属于多任务， 一个任务是目标 分类， 另一个是目标位置的确定， 即分类 与回归

RCNN：首先将深度学习引入目标检测领域,mAP由

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075420.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075403.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075459.png)

### RCNN存在的问题

- 尺寸归一化

### SPP net

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075646.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075727.png)

### Fast RCNN

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907075924.png)

#### RoI pooling

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907080056.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907080203.png)



首个端对端学习的深度检测网络，实时性与准确率达当时最优

推动了深度学习在检测任务中的应用，加速目标检测的研究

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907080249.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907080435.png)

## 论文泛读

### 摘要

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210907080642.png)





