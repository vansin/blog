# 目标检测评价指标



## Precision/Recall

|                        | True(预测正确)                                               | False(预测错误)                                              |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Positive(被预测为正例) | True positives( TP): 被正确地划分为正例的个数， 即实际为正例且被分类器划分为 正例的实例数； | False positives( FP): 被错误地划分为正例的个数， 即实际为负例但被分类器划分为 正例的实例数； |
| Negative(被预测为负例) | True negatives( TN): 被正确地划分为负例的个数， 即实际为负例且被分类器划分为 负例的实例数。 | False negatives( FN): 被错误地划分为负例的个数， 即实际为正例但被分类器划分为 负例的实例数； |


$$
Precision\,\,=\,\,\frac{TP}{TP+FP}=\frac{TP}{\text{所有被模型预测为正样本的数据的数量}}
$$

$$
Recall\,\,=\,\,\frac{TP}{TP+FN}=\frac{TP}{所有真实类别为正样本的数据的数量}
$$

## PR曲线

​		我们希望检测的结果P越高越好， R也越高越好， 但事实上这两者在某些情况下是矛盾的。

​		所以我们需要做的是找到一种精确率与召 回率之间的平衡。其中一个方法就是画出PR曲线， 然后用PR曲线下方的面积AUC（ Area under Curve） 去判断模型的好坏。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210906160614.png)

## IoU指标

​		训练好的目标检测模型会给出大量的预测 结果， 但是其中大多数的预测值都会有非 常低的置信度（ confidence score）， 因此我们只考虑那些置信度高于某个阈值的预测结果。

​		将原始图片送入训练好的模型， 在经过置 信度阈值筛选之后， 目标检测算法给出带 有边界框的预测结果：

IoU是预测框与ground truth的交集和并集的比值。对于每个类，预测框和ground  truth重叠的区域是交集， 而横跨的总区域就是并集。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210906161111.png)



## 目标检测中的PR

- TP: IoU>0 . 5 的检测框数量（ 同一Ground Truth只计算一次）
- FP: IoU<= 0 . 5 的检测框， 或者是检测到同一个GT的多余检测框的数量
- FN: 没有检测到的GT的数量
- 由于图片中我们没有预测到物体的每个部分都被视为Negative， 因此计算True  Negatives比较难办。

$$
Precision\,\,=\,\,\frac{TP}{TP+FP}=\frac{TP}{\text{所有被模型预测为正样本的数据的数量}}
$$

$$
Recall \,\,=\,\,\frac{TP}{TP+FN}=\frac{TP}{\text{所有真实类别为正样本的数据的数量}}
$$





** 在PASCAL VOC数据集中标注为difficult的数据不计入计算**

## m AP的计算

AP(Average Precision)

通过PR曲线， 我们可以得到对应的AP值：


- 在2010 年以前， PASCAL VOC竞赛中AP是这么定义的：
  - 首先要对模型预测结果进行排序（ranked output，按照各个预测值置信度降序排列。
  - 我们把recall的值从0到1划分为11份：0、0.1、0.2、0.3、0.4、0.5、0.6、0.7、0.8、0.9、1.0。
  - 在每个recall区间（0-0.1, 0.1-0.2，0.2-0.3，…，0.9-1.0）上我们计算精确率的最大值，然后再计算 这些精确率最大值的总和并平均，就是AP值。
- 从2010 年之后， PASCAL VOC竞赛把这11 份recall点换成了PR曲线中的所有recall数据点。 对于某个recall值r， precision值取所有recall>= r中的最大值（ 这样保证了p- r曲线是单调递 减的， 避免曲线出现摇摆） 这种方法叫做all- points- interpolation。这个AP值也就是PR曲 线下的面积值

## COCO中mAP的计算方法

​		采用的是I O U （ 用于决定是否为T P ） 在[ 0 . 5 :	0 . 0 5	:	0 . 9 5 ] 计算 1 0次A P ， 然后求均值的方法计算A P 。
