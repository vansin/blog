# 多远变量线性回归


## 方程
$h_n(x)=\theta _0​+\theta _0​x_1​+\theta _2​x_2​+\theta _3​x_3​+⋯+\theta _n​x_n​$


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210719111132.png)


## 梯度下降方法




![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213049.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213130.png)

### feature scaling

### 合适的学习率

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213234.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213247.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718213314.png)


## 特征多项式回归




## 正规方程法求参数


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214742.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214815.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718214833.png)


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210718215501.png)


## 解决不可逆问题

删除一些成比例的向量

octave 使用 pinv伪逆