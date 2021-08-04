## YOLO

## YOLO 发展历史



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804091948.png)

###  YOLO的历史意义

- 创造性的将识别与定位合二为一
- 由于其检测速度极快，在实际应用中十分受欢迎



## YOLO原理

- 一次性输出所检测到的目标信息，包括类别和位置。
- 只要求这个物体的中心在某个grid之内

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804212822.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804212840.png)



- 每个都预测出B个bounding boxs，这个bounding boxs有5个量，分别是物体的中心位置(x,y)和它的高(h)和宽(w)，以及这次预测的置信度。 

- 每个框还要负责预测这个框框中的物体**是什么类别**的

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213034.png)



如果我们有SxS个框框，每个框的bounding boxes个数为，分类器可以识别出C种不同的物体，那么整个ground truth的长度为: SxS(Bx5+C)



### Bounding Boxs的细节

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213358.png)

### Confidence

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213502.png)



### GroundTruth

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213543.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213641.png)

## YOLO V3网络结构

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804213716.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804091054.png)

Darknet-53处理速度每秒78张图，比Darknet-19慢不少，但是比同精度的
ResNet快很多。Yolov3依然保持了高性能。

### 特征图

- 根据不同的输入尺寸，会得到不同大小的输出特征图
- 每个特征图的每个格子中，都配置3个不同的先验框，所以最后三个特征图，这里暂且
  reshape为8 × 8 × 3 × 85、16 × 16 × 3 × 85、32 × 32 × 3 × 85
- 检测框位置（4维）、检测置信度（1维）、类别（80维）都在其中，加起来正好是85维。

### 先验框

- Yolo v3沿用了Yolov2中关于先验框的技巧，并且使用k-means对数据集中的标签框进行聚类，得到类别中心点的9个框，作为先验框。
- 有了先验框与输出特征图，就可以解码检测框 x，y，w，h：

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210804091417.png)



### 置信度和类别解码

- 置信度在输出85维中占固定一位，由sigmoid函数解码即可，解码之后数值区间在[0，1]
  中。
- COCO数据集有80个类别，所以类别数在85维输出中占了80维，每一维独立代表一个类别
  的置信度。使用sigmoid激活函数替代了Yolov2中的softmax，取消了类别之间的互斥，
  可以使网络更加灵活。

- 三个特征图一共可以解码出 8 × 8 × 3 + 16 × 16 × 3 + 32 × 32 × 3 = 4032 个box以及相应的类别、置信度。这4032个box，在训练和推理时，使用方法不一样：
  - 训练时4032个box全部送入打标签函数，进行后一步的标签以及损失函数的计算。
  - 推理时，选取一个置信度阈值，过滤掉低阈值box，再经过nms（非极大值抑制），就可以输出整个网络的预测结果了。