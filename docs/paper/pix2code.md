# 【前端智能化】pix2code论文复现

https://github.com/vansin/pix2code


## 论文复现炼丹炉搭建

### 软硬件参数
- 操作系统：Ubuntu 20.04
- CPU：XEON
- RAM： 128G
### 论文code环境

- Keras==2.1.2
- numpy==1.13.3
- opencv-python==3.3.0.10
- h5py==2.7.1
- tensorflow==1.4.0

### 环境搭建

> 以下步骤基于docker和NVIDIA Container Toolkit都安装好的基础上

```shell
docker pull tensorflow/tensorflow:1.4.0-gpu-py3
```

打开Pycharm选择对应的docker镜像

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210628145232.png)


## 论文笔记

### 摘要
Transforming a graphical user interface screenshot created by a designer into computer code is a typical task conducted by a developer in order to build customized software, websites, and mobile applications. In this paper, we show that deep learning methods can be leveraged to train a model end-to-end to automatically generate code from a single input image with over 77% of accuracy for three different platforms (i.e. iOS, Android and web-based technologies).

将设计师创建的图形用户界面截图转化为计算机代码去建立定制的软件、网站和移动应用程序，是软件工程师的一项典型任务。在本文中，我们表明深度学习方法可以用来训练一个端到端的模型来自动从一个单一的输入图像中生成代码，在三个不同的平台（即iOS）上，准确率超过77%。不同的平台（即iOS、Android和基于网络的技术）。
### 介绍


The process of implementing client-side software based on a Graphical User Interface (GUI) mockupcreated by a designer is the responsibility of developers. Implementing GUI code is, however,time-consuming and prevent developers from dedicating the majority of their time implementing theactual functionality and logic of the software they are building. Moreover, the computer languagesused to implement such GUIs are specific to each target runtime system; thus resulting in tediousand repetitive work when the software being built is expected to run on multiple platforms usingnative technologies. In this paper, we describe a model trained end-to-end with stochastic gradientdescent to simultaneously learns to model sequences and spatio-temporal visual features to generatevariable-length strings of tokens from a single GUI image as input.

基于设计师创建的图形用户界面（GUI）模型来实现客户端软件的过程是开发人员的责任。然而，实现GUI代码是很耗时的，它使开发人员无法将大部分时间用于实现他们正在构建的软件的实际功能和逻辑。此外，用于实现这种GUI的计算机语言是针对每个目标运行系统的；因此，当所构建的软件被期望在使用原生技术的多个平台上运行时，会导致繁琐和重复的工作。在本文中，我们描述了一个用随机梯度修正法进行端到端训练的模型，该模型同时学习了序列和时空视觉特征的建模，以从单一的GUI图像中生成可变长度的标记字符串作为输入。


Our first contribution is pix2code, a novel approach based on Convolutional and Recurrent NeuralNetworks allowing the generation of computer tokens from a single GUI screenshot as input. Thatis, no engineered feature extraction pipeline nor expert heuristics was designed to process the inputdata; our model learns from the pixel values of the input image alone. Our experiments demonstratethe effectiveness of our method for generating computer code for various platforms (i.e. iOS andAndroid native mobile interfaces, and multi-platform web-based HTML/CSS interfaces) without theneed for any change or specific tuning to the model. In fact, pix2code can be used as such to supportdifferent target languages simply by being trained on a different dataset. A video demonstrating oursystem is available online.

我们的第一个贡献是pix2code，一个基于卷积和递归神经网络的新方法，允许从一个单一的GUI屏幕截图作为输入生成计算机标记。也就是说，没有设计专门的特征提取管道或专家启发式方法来处理输入数据；我们的模型只从输入图像的像素值中学习。我们的实验证明了我们的方法在为各种平台（即iOS和Android原生移动界面，以及基于网络的多平台HTML/CSS界面）生成计算机代码方面的有效性，而不需要对模型进行任何改变或具体调整。事实上，pix2code可以被用来支持不同的目标语言，只需在不同的数据集上训练即可。网上有一段演示我们系统的视频。



### 相关工作

A recent example is DeepCoder [2], a system able to generate computer programs by leveragingstatistical predictions to augment traditional search techniques. In another work by Gaunt et al. [5],the generation of source code is enabled by learning the relationships between input-output examplesvia differentiable interpreters. Furthermore, Ling et al. [12] recently demonstrated program synthesisfrom a mixed natural language and structured program specification as input. It is important to notethat most of these methods rely on Domain Specific Languages (DSLs); computer languages (e.g.markup languages, programming languages, modeling languages) that are designed for a specializeddomain but are typically more restrictive than full-featured computer languages. Using DSLs thuslimit the complexity of the programming language that needs to be modeled and reduce the size ofthe search space.

最近的一个例子是DeepCoder[2]，一个能够通过利用统计预测来生成计算机程序的系统。 统计预测来增强传统的搜索技术。在Gaunt等人的另一项工作中[5]。 在Gaunt等人的另一项工作中[5]，通过学习输入-输出实例之间的关系，使源代码的生成成为可能。 通过可区分的解释器。此外，Ling等人[12]最近证明了程序合成 从一个混合的自然语言和结构化的程序规范作为输入的程序合成。值得注意的是 这些方法大多依赖于领域专用语言（DSL）；计算机语言（例如，标记语言、编程语言、建模语言）。 这些计算机语言（如标记语言、编程语言、建模语言）是为一个专门的领域而设计的。 但通常比全功能的计算机语言更具限制性。因此，使用DSLs 限制了需要建模的编程语言的复杂性，减少了搜索空间的大小。 搜索空间的大小。

### pix2code

#### 视觉模型

#### 解码器

#### 训练

#### Sampling

### Experiments

### 总结和讨论
