# 英汉术语对照

[[toc]]


鞍点，saddle point

上下文变量，context variable

上下文窗口，context window

上下文词，context word

上下文向量，context vector

变换，transform

编码器，encoder

词元，token

词元化，tokenize

标签，label

步幅，stride

参数，parameter

长短期记忆网络，long short-term memory (LSTM)

超参数，hyperparameter

层序softmax，hierarchical softmax

成本，cost

词表，vocabulary

词嵌入，word embedding

词向量，word vector

汇聚层，pooling layer

稠密，dense

大小，size

导入，import

轮，epoch

迭代模型参数，update model parameter(s)

丢弃法，dropout

动量法，momentum (method)

独立同分布，independent and identically distributed (i.i.d.)

端到端，end-to-end

多层感知机，multilayer perceptron

多头注意力，multi-head attention

二元分类，binary classification

二元语法，bigram

二次采样，subsample

发散，diverge

泛化，generalization

泛化误差，generalization error

方差，variance

访问参数，access parameters

非凸优化，non-convex optimization

分桶，bucketing

分类，classification

分类器，classifier

分词方式，tokenizer/tokenization

负采样，negative sampling

感受野，receptive field

格拉姆矩阵，Gram matrix

共现词频，co-occurrence frequency

归一化，normalization

过滤器，filter

过拟合，overfitting

核回归，kernel regression

恒等映射，identity mapping

假设，hypothesis

基准，baseline

激活函数，activation function

解码器，decoder

经验风险最小化，empirical risk minimization

局部最小值，local minimum

卷积核，convolutional kernel

卷积神经网络，convolutional neural network

决策边界，decision boundary

均值，mean

均方误差，mean squared error

均匀采样，uniform sampling

块，block

困惑度，perplexity

拉普拉斯平滑，Laplace smoothing

连结，concatenate

类，class

交叉熵，cross-entropy

连续词袋模型，continous bag-of-words (CBOW) model

零张量，zero tensor

流水线，pipeline

门控循环单元，gated recurrent units (GRU)

模型参数，model parameter

模型复杂度，model complexity

目标检测，object detection

偏差，bias

偏导数，partial derivative

偏移量，offset

批量，batch

平均池化层，average pooling layer

齐普夫定律，Zipf's law

欠拟合，underfitting

情感分析，sentiment analysis

全连接层，fully connected layer

权重，weight

三元语法，trigram

上采样，upsample

实例，instance

收敛，converge

属性，property

数值方法，numerical method

数据集，data set

数据样本，data instance

顺序分区，sequential partitioning

softmax回归，softmax regression

随机采样，random sampling

损失函数，loss function

双向循环神经网络，bidirectional recurrent neural network

特征，feature

特征图，feature map

特征值，eigenvalue

梯度，gradient

梯度裁剪，gradient clipping

梯度消失，vanishing gradients

填充，padding

跳字模型，skip-gram model

调参，tune hyper-parameter

停用词，stop words

通道，channel

凸优化，convex optimization

图像，image

未知词标记，unknown token

无偏估计，unbiased estimate

误差，error

小批量，mini-batch

小批量梯度，mini-batch gradient

线性模型，linear model

线性回归，linear regression

协同过滤，collaborative filtering

学习率，learning rate

训练误差，training error

循环神经网络，recurrent neural network (RNN)

样本，example

一维梯度下降，gradient descent in one-dimensional space

一元语法，unigram

隐藏变量，hidden variable

隐藏层，hidden layer

优化器，optimizer

语料库，corpus

运算符，operator

自注意力，self-attention

真实值，ground truth

指标，metric

支持向量机，support vector machine

注意力机制，attention mechanism

注意力模型，attention model

注意力提示，attention cue

准确率，accuracy


## 符号
:label:`chap_notation`

本书中使用的符号概述如下。

## 数字

* $x$：标量
* $\mathbf{x}$：向量
* $\mathbf{X}$：矩阵
* $\mathsf{X}$：张量
* $\mathbf{I}$：单位矩阵
* $x_i$, $[\mathbf{x}]_i$：向量$\mathbf{x}$第$i$个元素
* $x_{ij}$, $[\mathbf{X}]_{ij}$：矩阵$\mathbf{X}$第$i$行第$j$列的元素

## 集合论

* $\mathcal{X}$: 集合
* $\mathbb{Z}$: 整数集合
* $\mathbb{R}$ 实数集合
* $\mathbb{R}^n$: $n$维实数向量
* $\mathbb{R}^{a\times b}$: 包含$a$行和$b$列的实数矩阵
* $\mathcal{A}\cup\mathcal{B}$: 集合$\mathcal{A}$和$\mathcal{B}$的并集
* $\mathcal{A}\cap\mathcal{B}$：集合$\mathcal{A}$和$\mathcal{B}$的交集
* $\mathcal{A}\setminus\mathcal{B}$：集合$\mathcal{B}$与集合$\mathcal{A}$相减

## 函数和运算符

* $f(\cdot)$：函数
* $\log(\cdot)$：自然对数
* $\exp(\cdot)$: 指数函数
* $\mathbf{1}_\mathcal{X}$: 指示函数
* $\mathbf{(\cdot)}^\top$: 向量或矩阵的转置
* $\mathbf{X}^{-1}$: 矩阵的逆
* $\odot$: 按元素相乘
* $[\cdot, \cdot]$：连结
* $\lvert \mathcal{X} \rvert$：集合的基数
* $\|\cdot\|_p$: ：$L_p$ 正则
* $\|\cdot\|$: $L_2$ 正则
* $\langle \mathbf{x}, \mathbf{y} \rangle$：向量$\mathbf{x}$和$\mathbf{y}$的点积
* $\sum$: 连加
* $\prod$: 连乘
* $\stackrel{\mathrm{def}}{=}$：定义

## 微积分

* $\frac{dy}{dx}$：$y$关于$x$的导数
* $\frac{\partial y}{\partial x}$：$y$关于$x$的偏导数
* $\nabla_{\mathbf{x}} y$：$y$关于$\mathbf{x}$的梯度
* $\int_a^b f(x) \;dx$: $f$在$a$到$b$区间上关于$x$的定积分
* $\int f(x) \;dx$: $f$关于$x$的不定积分

## 概率与信息论

* $P(\cdot)$：概率分布
* $z \sim P$: 随机变量$z$具有概率分布$P$
* $P(X \mid Y)$：$X\mid Y$的条件概率
* $p(x)$: 概率密度函数
* ${E}_{x} [f(x)]$: 函数$f$对$x$的数学期望
* $X \perp Y$: 随机变量$X$和$Y$是独立的
* $X \perp Y \mid Z$: 随机变量$X$和$Y$在给定随机变量$Z$的条件下是独立的
* $\mathrm{Var}(X)$: 随机变量$X$的方差
* $\sigma_X$: 随机变量$X$的标准差
* $\mathrm{Cov}(X, Y)$: 随机变量$X$和$Y$的协方差
* $\rho(X, Y)$: 随机变量$X$和$Y$的相关性
* $H(X)$: 随机变量$X$的熵
* $D_{\mathrm{KL}}(P\|Q)$: $P$和$Q$的KL-散度

## 复杂度

* $\mathcal{O}$：大O标记

[Discussions](https://discuss.d2l.ai/t/2089)
