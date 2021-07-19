# 多元线性回归


## 回归模型假设方程

普通形式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719113341.png)
<!-- 
$$
h_n(x)=\theta _0​+\theta _0​x_1​+\theta _2​x_2​+\theta _3​x_3​+⋯+\theta _n​x_n​
$$
 -->

矩阵形式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719134529.png)

## 梯度下降方法


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719135131.png)

另外一种形式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719135407.png)

### 一元梯度下降VS多元梯度下降

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213049.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213130.png)

## Feature Scaling(特征缩放)


1. 统一特征的权重&提升模型准确性

如果某个特征的取值范围比其他特征大很多，那么数值计算（比如说计算欧式距离）就受该特征的主要支配。但实际上并不一定是这个特征最重要，通常需要把每个特征看成同等重要。归一化/标准化数据可以使不同维度的特征放在一起进行比较，可以大大提高模型的准确性。



2. 提升梯度下降法的收敛速度

在使用梯度下降法求解最优化问题时， 归一化/标准化数据后可以加快梯度下降的求解速度。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143005.png)

feature scaling（特征缩放） 的思想就是将所选特征的value都缩放到一个大致相似的范围。这样做的目的是为了加快收敛，减少采用梯度下降算法迭代的次数。那么为什么feature scaling能做到这点呢。




### min-max normalization (最大最小归一化)

将数值范围缩放到 [0, 1] 区间里

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143306.png)

### mean normalization(均值归一化)

将数值范围缩放到 [-1, 1] 区间里，且数据的均值变为0

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143328.png)

### standardization / z-score normalization (标准化)

将数值缩放到0附近，且数据的分布变为均值为0，标准差为1的标准正态分布（先减去均值来对特征进行 中心化 mean centering 处理，再除以标准差进行缩放）

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143423.png)

### (max abs normalization)最大绝对值归一化

也就是将数值变为单位长度（scaling to unit length），将数值范围缩放到 [-1, 1] 区间里

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143458.png)

### robust standardization(稳健标准化)
稳键标准化（robust standardization）：先减去中位数，再除以四分位间距（interquartile range），因为不涉及极值，因此在数据里有异常值的情况下表现比较稳健

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719143528.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719141441.png)

## 选择合适的学习率

- 学习率太小：收敛很慢
- 学习率太大：很可能导致抖动，甚至不能收敛


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213234.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213247.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213314.png)


## 特征多项式回归




## 正规方程法求参数



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214742.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214815.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214833.png)




### 梯度下降法 vs 正规方程法求

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718215501.png)


### 解决不可逆问题

- 删除一些成比例的向量
- 特征向量太多了，删除一些特征向量

octave 使用 pinv伪逆