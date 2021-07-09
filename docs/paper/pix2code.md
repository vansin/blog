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


## 论文内容介绍

### 摘要
Transforming a graphical user interface screenshot created by a designer into computer code is a typical task conducted by a developer in order to build customized software, websites, and mobile applications. In this paper, we show that deep learning methods can be leveraged to train a model end-to-end to automatically generate code from a single input image with over 77% of accuracy for three different platforms (i.e. iOS, Android and web-based technologies).

将设计师创建的图形用户界面截图转化为计算机代码去建立定制的软件、网站和移动应用程序，是软件工程师的一项典型任务。在本文中，我们表明深度学习方法可以用来训练一个端到端的模型来自动从一个单一的输入图像中生成代码，在三个不同的平台（即iOS）上，准确率超过77%。不同的平台（即iOS、Android和基于网络的技术）。
### 介绍


The process of implementing client-side software based on a Graphical User Interface (GUI) mockupcreated by a designer is the responsibility of developers. Implementing GUI code is, however,time-consuming and prevent developers from dedicating the majority of their time implementing theactual functionality and logic of the software they are building. Moreover, the computer languagesused to implement such GUIs are specific to each target runtime system; thus resulting in tediousand repetitive work when the software being built is expected to run on multiple platforms usingnative technologies. In this paper, we describe a model trained end-to-end with stochastic gradientdescent to simultaneously learns to model sequences and spatio-temporal visual features to generatevariable-length strings of tokens from a single GUI image as input.

基于设计师创建的图形用户界面（GUI）模型来实现客户端软件的过程是开发人员的责任。然而，实现GUI代码是很耗时的，它使开发人员无法将大部分时间用于实现他们正在构建的软件的实际功能和逻辑。此外，用于实现这种GUI的计算机语言是针对每个目标运行系统的；因此，当所构建的软件被期望在使用原生技术的多个平台上运行时，会导致繁琐和重复的工作。在本文中，我们描述了一个用随机梯度修正法进行端到端训练的模型，该模型同时学习了序列和时空视觉特征的建模，以从单一的GUI图像中生成可变长度的标记字符串作为输入。


Our first contribution is pix2code, a novel approach based on Convolutional and Recurrent NeuralNetworks allowing the generation of computer tokens from a single GUI screenshot as input. Thatis, no engineered feature extraction pipeline nor expert heuristics was designed to process the inputdata; our model learns from the pixel values of the input image alone. Our experiments demonstratethe effectiveness of our method for generating computer code for various platforms (i.e. iOS andAndroid native mobile interfaces, and multi-platform web-based HTML/CSS interfaces) without theneed for any change or specific tuning to the model. In fact, pix2code can be used as such to supportdifferent target languages simply by being trained on a different dataset. A video demonstrating oursystem is available online.

我们的第一个贡献是pix2code，一个基于卷积和递归神经网络的新方法，允许从一个单一的GUI屏幕截图作为输入生成计算机标记。也就是说，没有设计专门的特征提取管道或专家启发式方法来处理输入数据；我们的模型只从输入图像的像素值中学习。我们的实验证明了我们的方法在为各种平台（即iOS和Android原生移动界面，以及基于网络的多平台HTML/CSS界面）生成计算机代码方面的有效性，而不需要对模型进行任何改变或具体调整。事实上，pix2code可以被用来支持不同的目标语言，只需在不同的数据集上训练即可。网上有一段演示我们系统的视频。



### 相关工作

The automatic generation of programs using machine learning techniques is a relatively new field of
research and program synthesis in a human-readable format have only been addressed very recently.

使用机器学习技术自动生成程序是一个相对较新的研究领域，而以人类可读格式进行的程序合成也只是在最近才被解决。 

A recent example is DeepCoder [2], a system able to generate computer programs by leveragingstatistical predictions to augment traditional search techniques. In another work by Gaunt et al. [5],the generation of source code is enabled by learning the relationships between input-output examplesvia differentiable interpreters. Furthermore, Ling et al. [12] recently demonstrated program synthesisfrom a mixed natural language and structured program specification as input. It is important to notethat most of these methods rely on Domain Specific Languages (DSLs); computer languages (e.g.markup languages, programming languages, modeling languages) that are designed for a specializeddomain but are typically more restrictive than full-featured computer languages. Using DSLs thuslimit the complexity of the programming language that needs to be modeled and reduce the size ofthe search space.

最近的一个例子是DeepCoder[2]，一个能够通过利用统计预测来生成计算机程序的系统。 统计预测来增强传统的搜索技术。在Gaunt等人的另一项工作中[5]。 在Gaunt等人的另一项工作中[5]，通过学习输入-输出实例之间的关系，使源代码的生成成为可能。 通过可区分的解释器。此外，Ling等人[12]最近证明了程序合成 从一个混合的自然语言和结构化的程序规范作为输入的程序合成。值得注意的是 这些方法大多依赖于领域专用语言（DSL）；计算机语言（例如，标记语言、编程语言、建模语言）。 这些计算机语言（如标记语言、编程语言、建模语言）是为一个专门的领域而设计的。 但通常比全功能的计算机语言更具限制性。因此，使用DSLs 限制了需要建模的编程语言的复杂性，减少了搜索空间的大小。 搜索空间的大小。


Although the generation of computer programs is an active research field as suggested by thesebreakthroughs, program generation from visual inputs is still a nearly unexplored research area. Theclosest related work is a method developed by Nguyen et al. [14] to reverse-engineer Android userinterfaces from screenshots. However, their method relies entirely on engineered heuristics requiringexpert knowledge of the domain to be implemented successfully. Our paper is, to the best of ourknowledge, the first work attempting to address the problem of user interface code generation fromvisual inputs by leveraging machine learning to learn latent variables instead of engineering complexheuristics.

虽然计算机程序的生成是一个活跃的研究领域，正如这些突破所表明的那样 突破，但从视觉输入中生成程序仍然是一个几乎没有探索过的研究领域。最接近的相关工作是Nguyen等人开发的方法。 最接近的相关工作是Nguyen等人[14]开发的一种方法，从屏幕截图中逆向设计安卓用户界面 的方法，从屏幕截图中逆向设计安卓用户界面。然而，他们的方法完全依赖于工程化的启发式方法，需要 他们的方法完全依赖于工程化的启发式方法，需要有该领域的专家知识才能成功实施。据我们所知，我们的论文是 我们的论文是，据我们所知，第一个试图解决从视觉输入生成用户界面代码问题的工作。 视觉输入的问题，利用机器学习来学习潜在的变量，而不是设计复杂的 启发式方法。


In order to exploit the graphical nature of our input, we can borrow methods from the computer visionliterature. In fact, an important number of research [21, 4, 10, 22] have addressed the problem ofimage captioning with impressive results; showing that deep neural networks are able to learn latentvariables describing objects in an image and their relationships with corresponding variable-lengthtextual descriptions. All these methods rely on two main components. First, a Convolutional NeuralNetwork (CNN) performing unsupervised feature learning mapping the raw input image to a learnedrepresentation. Second, a Recurrent Neural Network (RNN) performing language modeling on thetextual description associated with the input picture. These approaches have the advantage of beingdifferentiable end-to-end, thus allowing the use of gradient descent for optimization.

为了利用我们输入的图形性质，我们可以借用计算机视觉文献中的方法。事实上，大量的研究[21, 4, 10, 22]已经解决了图像说明的问题，并取得了令人印象深刻的结果；表明深度神经网络能够学习描述图像中物体的潜变量以及它们与相应的可变长度的文本描述的关系。所有这些方法都依赖于两个主要部分。首先，一个卷积神经网络（CNN）执行无监督的特征学习，将原始输入图像映射到一个学习的代表。第二，一个递归神经网络（RNN）对与输入图片相关的文本描述进行语言建模。这些方法的优点是端到端的可差异性，因此可以使用梯度下降法进行优化。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709142137.png)

Figure 1: Overview of the pix2code model architecture. During training, the GUI image is encoded bya CNN-based vision model; the context (i.e. a sequence of one-hot encoded tokens corresponding toDSL code) is encoded by a language model consisting of a stack of LSTM layers. The two resultingfeature vectors are then concatenated and fed into a second stack of LSTM layers acting as a decoder.Finally, a softmax layer is used to sample one token at a time; the output size of the softmax layercorresponding to the DSL vocabulary size. Given an image and a sequence of tokens, the model (i.e.contained in the gray box) is differentiable and can thus be optimized end-to-end through gradientdescent to predict the next token in the sequence. During sampling, the input context is updated foreach prediction to contain the last predicted token. The resulting sequence of DSL tokens is compiledto the desired target language using traditional compiler design techniques.

图1：pix2code模型架构概述。在训练过程中，GUI图像由基于CNN的视觉模型进行编码。 一个基于CNN的视觉模型；上下文（即对应于DSL代码的一热编码令牌序列）由LSTM层堆栈组成的语言模型编码。 DSL代码）被一个由LSTM层堆叠而成的语言模型编码。所得的两个 然后将两个特征向量串联起来，送入第二个作为解码器的LSTM层堆栈中。 最后，一个softmax层被用来一次对一个标记进行采样；softmax层的输出尺寸 与DSL词汇量相对应。给定一个图像和一连串的标记，模型（即包含在灰框中）被区分开来。 包含在灰盒中）是可微分的，因此可以通过梯度优化端到端的 下降来预测序列中的下一个符号。在取样过程中，输入环境被更新为 每一个预测都包含最后一个预测的标记。由此产生的DSL标记序列被编译为 使用传统的编译器设计技术编译成所需的目标语言。


### pix2code

The task of generating computer code written in a given programming language from a GUI screenshotcan be compared to the task of generating English textual descriptions from a scene photography. Inboth scenarios, we want to produce a variable-length strings of tokens from pixel values. We canthus divide our problem into three sub-problems. First, a computer vision problem of understandingthe given scene (i.e. in this case, the GUI image) and inferring the objects present, their identities,positions, and poses (i.e. buttons, labels, element containers). Second, a language modeling problemof understanding text (i.e. in this case, computer code) and generating syntactically and semanticallycorrect samples. Finally, the last challenge is to use the solutions to both previous sub-problems byexploiting the latent variables inferred from scene understanding to generate corresponding textualdescriptions (i.e. computer code rather than English) of the objects represented by these variables.

从GUI截图中生成以特定编程语言编写的计算机代码的任务，可以与从场景摄影中生成英文文本描述的任务相比较。在这两种情况下，我们都想从像素值中产生一个可变长度的标记字符串。因此，我们可以将我们的问题分为三个子问题。第一，计算机视觉问题，即理解给定的场景（即在这种情况下，GUI图像）并推断出存在的物体、它们的身份、位置和姿势（即按钮、标签、元素容器）。第二，语言建模问题，即理解文本（即在这种情况下，计算机代码）并生成句法和语义正确的样本。最后，最后一个挑战是利用前面两个子问题的解决方案，通过利用从场景理解中推断出的潜在变量来生成这些变量所代表的对象的相应的文本描述（即计算机代码而不是英语）。


CNNs are currently the method of choice to solve a wide range of vision problems thanks to theirtopology allowing them to learn rich latent representations from the images they are trained on[16, 11]. We used a CNN to perform unsupervised feature learning by mapping an input image to alearned fixed-length vector; thus acting as an encoder as shown in Figure 1

CNN目前是解决广泛的视觉问题的首选方法，这要归功于它的拓扑结构，允许它们从被训练的图像中学习丰富的潜在表示[16, 11]。我们使用CNN来进行无监督的特征学习，将输入的图像映射到一个固定长度的向量，从而充当一个编码器，如图1所示。

#### 视觉模型

The input images are initially re-sized to 256 × 256 pixels (the aspect ratio is not preserved) and thepixel values are normalized before to be fed in the CNN. No further pre-processing is performed. Toencode each input image to a fixed-size output vector, we exclusively used small 3 × 3 receptivefields which are convolved with stride 1 as used by Simonyan and Zisserman for VGGNet [18].These operations are applied twice before to down-sample with max-pooling. The width of the firstconvolutional layer is 32, followed by a layer of width 64, and finally width 128. Two fully connectedlayers of size 1024 applying the rectified linear unit activation complete the vision model.

输入的图像最初被调整为256×256像素（长宽比没有被保留），像素值在被输入CNN之前被归一化。没有进行进一步的预处理。为了将每个输入图像编码为固定大小的输出向量，我们专门使用了小的3×3接收场，这些接收场与Simonyan和Zisserman用于VGGNet[18]的stride 1进行了卷积处理。第一个卷积层的宽度为32，其次是宽度为64的层，最后是宽度为128。两个大小为1024的全连接层应用整顿的线性单元激活完成了视觉模型。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709143004.png)


#### 解码器

We designed a simple lightweight DSL to describe GUIs as illustrated in Figure 2. In this work weare only interested in the GUI layout, the different graphical components, and their relationships;thus the actual textual value of the labels is ignored. Additionally to reducing the size of the searchspace, the DSL simplicity also reduces the size of the vocabulary (i.e. the total number of tokenssupported by the DSL). As a result, our language model can perform token-level language modelingwith a discrete input by using one-hot encoded vectors; eliminating the need for word embeddingtechniques such as word2vec [13] that can result in costly computations.

我们设计了一个简单的轻型DSL来描述GUI，如图2所示。在这项工作中，我们 只对GUI的布局、不同的图形组件以及它们之间的关系感兴趣。 因此，标签的实际文本价值被忽略了。除了减少搜索空间的大小 除了减少搜索空间的大小，DSL的简单性也减少了词汇表的大小（即DSL支持的标记的总数量 即DSL所支持的标记总数）。) 因此，我们的语言模型可以在离散输入的情况下进行标记级的语言建模 我们的语言模型可以通过使用单次编码的向量对离散的输入进行标记级的语言建模；消除了对单词嵌入的需要。 技术，如word2vec[13]，这些技术会导致昂贵的计算。


In most programming languages and markup languages, an element is declared with an openingtoken; if children elements or instructions are contained within a block, a closing token is usuallyneeded for the interpreter or the compiler. In such a scenario where the number of children elementscontained in a parent element is variable, it is important to model long-term dependencies to beable to close a block that has been opened. Traditional RNN architectures suffer from vanishingand exploding gradients preventing them from being able to model such relationships between datapoints spread out in time series (i.e. in this case tokens spread out in a sequence). Hochreiter andSchmidhuber proposed the Long Short-Term Memory (LSTM) neural architecture in order to addressthis very problem [9]. The different LSTM gate outputs can be computed as follows:

在大多数编程语言和标记语言中，一个元素被声明为一个开放标记；如果子元素或指令被包含在一个块中，通常需要一个关闭标记给解释器或编译器。在这种情况下，父元素中包含的子元素的数量是可变的，重要的是建立长期的依赖关系，以便能够关闭已经打开的块。传统的RNN架构受到消失和爆炸梯度的影响，使其无法对时间序列中分散的数据点（即在这种情况下分散在一个序列中的标记）之间的这种关系进行建模。Hochreiter和Schmidhuber提出了长短时记忆（LSTM）神经结构，以解决这个问题[9]。不同的LSTM门输出可以计算如下。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709143225.png)


With W the matrices of weights, xt the new input vector at time t, ht−1 the previously producedoutput vector, ct−1 the previously produced cell state’s output, b the biases, and φ and σ the activation functions sigmoid and hyperbolic tangent, respectively. The cell state c learns to memorizeinformation by using a recursive connection as done in traditional RNN cells. The input gate i isused to control the error flow on the inputs of cell state c to avoid input weight conflicts that occur intraditional RNN because the same weight has to be used for both storing certain inputs and ignoringothers. The output gate o controls the error flow from the outputs of the cell state c to prevent outputweight conflicts that happen in standard RNN because the same weight has to be used for bothretrieving information and not retrieving others. The LSTM memory block can thus use i to decidewhen to write information in c and use o to decide when to read information from c. We used theLSTM variant proposed by Gers and Schmidhuber [6] with a forget gate f to reset memory and helpthe network model continuous sequences.

W是权重矩阵，xt是时间t的新输入向量，ht-1是之前产生的输出向量，ct-1是之前产生的细胞状态的输出，b是偏置，φ和σ分别是激活函数sigmoid和双曲切。细胞状态c通过使用递归连接来学习记忆信息，正如传统的RNN细胞所做的那样。输入门i被用来控制细胞状态c的输入错误流，以避免传统RNN中出现的输入权重冲突，因为相同的权重必须用于存储某些输入和忽略其他输入。输出门o控制单元状态c的输出的错误流，以避免标准RNN中发生的输出权重冲突，因为同一权重必须用于检索信息和不检索其他信息。因此，LSTM记忆块可以用i来决定何时在c中写入信息，用o来决定何时从c中读取信息。我们使用Gers和Schmidhuber[6]提出的LSTM变体，用遗忘门f来重置记忆并帮助网络建立连续序列模型。

Our model is trained in a supervised learning manner by feeding an image I and a contextual sequenceX of T tokens xt, t ∈ {0 . . . T − 1} as inputs; and the token xT as the target label. As shown onFigure 1, a CNN-based vision model encodes the input image I into a vectorial representation p. Theinput token xt is encoded by an LSTM-based language model into an intermediary representation qtallowing the model to focus more on certain tokens and less on others [8]. This first language modelis implemented as a stack of two LSTM layers with 128 cells each. The vision-encoded vector p andthe language-encoded vector qt are concatenated into a single feature vector rt which is then fed intoa second LSTM-based model decoding the representations learned by both the vision model and thelanguage model. The decoder thus learns to model the relationship between objects present in theinput GUI image and the associated tokens present in the DSL code. Our decoder is implemented asa stack of two LSTM layers with 512 cells each. This architecture can be expressed mathematicallyas follows:

我们的模型是以监督学习的方式进行训练的，将图像I和T个标记的上下文序列X，t∈{0 . . T - 1}作为输入；并将标记xT作为目标标签。如图1所示，一个基于CNN的视觉模型将输入图像I编码为一个矢量表示p。输入的标记xt被一个基于LSTM的语言模型编码为一个中间表示q，使该模型能够更多地关注某些标记而不是其他标记[8]。这第一个语言模型被实现为两个LSTM层的堆叠，每个层有128个单元。视觉编码的向量p和语言编码的向量qt被连接成一个单一的特征向量rt，然后被送入第二个基于LSTM的模型，对视觉模型和语言模型学到的表征进行解码。解码器因此学会了对输入的GUI图像中的对象和DSL代码中的相关标记之间的关系进行建模。我们的解码器是作为两个LSTM层的堆栈实现的，每个层有512个单元。这种结构可以用数学方法表示如下。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709143445.png)

This architecture allows the whole pix2code model to be optimized end-to-end with gradient descentto predict a token at a time after it has seen both the image as well as the preceding tokens in thesequence. The discrete nature of the output (i.e. fixed-sized vocabulary of tokens in the DSL) allowsus to reduce the task to a classification problem. That is, the output layer of our model has the samenumber of cells as the vocabulary size; thus generating a probability distribution of the candidatetokens at each time step allowing the use of a softmax layer to perform multi-class classification.

这种结构允许整个pix2code模型通过梯度下降进行端到端的优化 在它看过图像和前面的标记后，每次预测一个标记。 序列中的标记。输出的离散性（即DSL中固定大小的标记词汇）允许我们将任务简化为分类。 我们可以把这个任务简化为一个分类问题。也就是说，我们模型的输出层具有与词汇表相同的单元数。 我们的模型的输出层具有与词汇量相同的单元数；因此，在每个时间点上产生一个候选词的概率分布 因此，在每个时间步骤中生成候选标记的概率分布，允许使用softmax层来进行多类分类。



#### 训练

The length T of the sequences used for training is important to model long-term dependencies;for example to be able to close a block of code that has been opened. After conducting empiricalexperiments, the DSL input files used for training were segmented with a sliding window of size48; in other words, we unroll the recurrent neural network for 48 steps. This was found to be asatisfactory trade-off between long-term dependencies learning and computational cost. For everytoken in the input DSL file, the model is therefore fed with both an input image and a contextualsequence of T = 48 tokens. While the context (i.e. sequence of tokens) used for training is updatedat each time step (i.e. each token) by sliding the window, the very same input image I is reusedfor samples associated with the same GUI. The special tokens < ST ART > and < END > areused to respectively prefix and suffix the DSL files similarly to the method used by Karpathy andFei-Fei [10]. Training is performed by computing the partial derivatives of the loss with respect tothe network weights calculated with backpropagation to minimize the multiclass log loss:

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144028.png)


With xt+1 the expected token, and yt the predicted token. The model is optimized end-to-end hencethe loss L is minimized with regard to all the parameters including all layers in the CNN-based visionmodel and all layers in both LSTM-based models. Training with the RMSProp algorithm [20] gavethe best results with a learning rate set to 1e − 4 and by clipping the output gradient to the range[−1.0, 1.0] to cope with numerical instability [8]. To prevent overfitting, a dropout regularization[19] set to 25% is applied to the vision model after each max-pooling operation and at 30% aftereach fully-connected layer. In the LSTM-based models, dropout is set to 10% and only applied tothe non-recurrent connections [24]. Our model was trained with mini-batches of 64 image-sequencepairs.

xt+1是预期的令牌，yt是预测的令牌。该模型是端到端的优化，因此 损失L是最小化的，所有的参数包括基于CNN的视觉模型中的所有层 模型和基于LSTM的模型中的所有层。使用RMSProp算法[20]进行训练的结果是最好的，其学习率设定为 在学习率设置为1e - 4的情况下，通过将输出梯度剪裁到以下范围，得到了最佳结果 [-1.0, 1.0]以应对数值不稳定[8]。为了防止过度拟合，采用了dropout regularization [19]设置为25%，在每个最大集合操作后应用于视觉模型，在每个全连接层后设置为30%。 在每个全连接层之后，将正则化设置为25%，并在每个全连接层之后设置为30%。在基于LSTM的模型中，dropout被设置为10%，并且只适用于 非递归连接[24]。我们的模型是用64个图像-序列的小型批次来训练的。 对进行训练。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144151.png)

#### Sampling

To generate DSL code, we feed the GUI image I and a contextual sequence X of T = 48 tokenswhere tokens xt . . . xT −1 are initially set empty and the last token of the sequence xT is set to thespecial < ST ART > token. The predicted token yt is then used to update the next sequence ofcontextual tokens. That is, xt . . . xT −1 are set to xt+1 . . . xT (xt is thus discarded), with xT set toyt. The process is repeated until the token < END > is generated by the model. The generatedDSL token sequence can then be compiled with traditional compilation methods to the desired target language.

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144345.png)

### Experiments
Access to consequent datasets is a typical bottleneck when training deep neural networks. To the best of our knowledge, no dataset consisting of both GUI screenshots and source code was available at the time this paper was written. As a consequence, we synthesized our own data resulting in the three datasets described in Table 1. The column Synthesizable refers to the maximum number of unique GUI configuration that can be synthesized using our stochastic user interface generator. The columns Instances refers to the number of synthesized (GUI screenshot, GUI code) file pairs. The columns Samples refers to the number of distinct image-sequence pairs. In fact, training and sampling are done one token at a time by feeding the model with an image and a sequence of tokens obtained with a sliding window of fixed size T. The total number of training samples thus depends on the total number of tokens written in the DSL files and the size of the sliding window. Our stochastic user interface generator is designed to synthesize GUIs written in our DSL which is then compiled to the desired target language to be rendered. Using data synthesis also allows us to demonstrate the capability of our model to generate computer code for three different platforms.

获得相应的数据集是训练深度神经网络时的一个典型瓶颈。据我们所知，在撰写本文时，还没有由GUI屏幕截图和源代码组成的数据集可用。因此，我们合成了自己的数据，形成了表1中描述的三个数据集。可合成列指的是使用我们的随机用户界面生成器可以合成的独特GUI配置的最大数量。列Instances指的是合成的（GUI截图，GUI代码）文件对的数量。列Samples指的是不同的图像-序列对的数量。事实上，训练和取样是通过向模型提供图像和用固定大小的滑动窗口T获得的标记序列，一次完成一个标记。我们的随机用户界面生成器被设计用来合成用我们的DSL编写的GUI，然后被编译成所需的目标语言进行渲染。使用数据合成也使我们能够证明我们的模型有能力为三个不同的平台生成计算机代码。


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144507.png)

Our model has around 109 × 106 parameters to optimize and all experiments are performed with the same model with no specific tuning; only the training datasets differ as shown on Figure 3. Code generation is performed with both greedy search and beam search to find the tokens that maximize the classification probability. To evaluate the quality of the generated output, the classification error is computed for each sampled DSL token and averaged over the whole test dataset. The length difference between the generated and the expected token sequences is also counted as error. The results can be seen on Table 2. 

我们的模型有大约109×106个参数需要优化，所有的实验都是用同一个模型进行的，没有特定的调整；只有训练数据集不同，如图3所示。代码生成是通过贪婪搜索和波束搜索来寻找分类概率最大化的标记。为了评估生成输出的质量，对每个采样的DSL标记计算分类误差，并对整个测试数据集取平均值。生成的标记序列和预期的标记序列之间的长度差也被算作误差。结果可以在表2中看到。

Figures 4, 5, and 6 show samples consisting of input GUIs (i.e. ground truth), and output GUIs generated by a trained pix2code model. It is important to remember that the actual textual value of the labels is ignored and that both our data synthesis algorithm and our DSL compiler assign randomly generated text to the labels. Despite occasional problems to select the right color or the right style for specific GUI elements and some difficulties modelling GUIs consisting of long lists of graphical components, our model is generally able to learn the GUI layout in a satisfying manner and can preserve the hierarchical structure of the graphical elements. 

图4、5和6显示了由输入图形用户界面（即地面实况）和输出图形用户界面组成的样本。由训练有素的pix2code模型生成。重要的是要记住，标签的实际文本价值被忽略了。标签的实际文本价值被忽略了，我们的数据合成算法和我们的DSL编译器都是随机分配的 生成的文本到标签上。尽管在为特定的GUI元素选择正确的颜色或样式时偶尔会出现问题 尽管在为特定的GUI元素选择正确的颜色或正确的样式时偶尔会出现问题，而且在为由长长的图形组件列表组成的GUI建模时也有一些困难。元素选择正确的颜色或正确的风格，以及在对由长长的图形列表组成的GUI进行建模时遇到一些困难，但我们的模型通常能够以令人满意的方式学习GUI的布局，并且能够 保留图形元素的层次结构。


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144712.png)

### 总结和讨论


In this paper, we presented pix2code, a novel method to generate computer code given a single GUI image as input. While our work demonstrates the potential of such a system to automate the process of implementing GUIs, we only scratched the surface of what is possible. Our model consists of relatively few parameters and was trained on a relatively small dataset. The quality of the generated code could be drastically improved by training a bigger model on significantly more data for an extended number of epochs. Implementing a now-standard attention mechanism [1, 22] could further improve the quality of the generated code. 

在本文中，我们介绍了pix2code，一种新的方法，可以生成计算机代码，给定一个单一的图形用户界面图像作为输入。虽然我们的工作展示了这样一个系统在实现GUI过程中的自动化潜力，但我们只是触及了可能的表面。我们的模型由相对较少的参数组成，并在一个相对较小的数据集上进行训练。生成的代码的质量可以通过在更多的数据上训练一个更大的模型来大幅提高，并延长历时数。实施现在标准的注意力机制[1, 22]可以进一步提高生成代码的质量。


Using one-hot encoding does not provide any useful information about the relationships between the tokens since the method simply assigns an arbitrary vectorial representation to each token. Therefore, pre-training the language model to learn vectorial representations would allow the relationships between tokens in the DSL to be inferred (i.e. learning word embeddings such as word2vec [13]) and as a result alleviate semantical error in the generated code. Furthermore, one-hot encoding does not scale to very big vocabulary and thus restrict the number of symbols that the DSL can support. 

使用单次编码并不能提供关于标记之间关系的任何有用信息，因为该方法只是为每个标记分配了任意的矢量表示。tokens之间的关系，因为该方法只是给每个token分配了一个任意的矢量表示。因此。预先训练语言模型以学习矢量表征，可以使DSL中的标记之间的关系 符号之间的关系进行推断（即学习单词嵌入，如word2vec[13]），从而减轻了语义的压力。因此，可以减轻生成的代码中的语义错误。此外，单热编码不能 规模，因此限制了DSL所能支持的符号数量。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709144942.png)


Generative Adversarial Networks GANs [7] have shown to be extremely powerful at generating images and sequences [23, 15, 25, 17, 3]. Applying such techniques to the problem of generating computer code from an input image is so far an unexplored research area. GANs could potentially be used as a standalone method to generate code or could be used in combination with our pix2code model to fine-tune results. 

生成对抗网络GANs[7]在生成图像和序列方面表现得非常强大 图像和序列[23, 15, 25, 17, 3]。将这种技术应用于从输入图像生成计算机代码的问题 迄今为止，将这种技术应用于从输入图像生成计算机代码的问题是一个尚未探索的研究领域。GANs有可能被用作 可以作为一种独立的方法来生成代码，也可以与我们的pix2code 模型来微调结果。

A major drawback of deep neural networks is the need for a lot of training data for the resulting model to generalize well on new unseen examples. One of the significant advantages of the method we described in this paper is that there is no need for human-labelled data. In fact, the network can model the relationships between graphical components and associated tokens by simply being trained on image-sequence pairs. Although we used data synthesis in our paper partly to demonstrate the capability of our method to generate GUI code for various platforms; data synthesis might not be needed at all if one wants to focus only on web-based GUIs. In fact, one could imagine crawling the World Wide Web to collect a dataset of HTML/CSS code associated with screenshots of rendered websites. Considering the large number of web pages already available online and the fact that new websites are created every day, the web could theoretically supply a virtually unlimited amount of  training data; potentially allowing deep learning methods to fully automate the implementation of web-based GUIs. 

深度神经网络的一个主要缺点是需要大量的训练数据，以使产生的模型在新的未见过的例子上有良好的概括性。我们在本文中描述的方法的一个显著优势是不需要人类标记的数据。事实上，该网络可以通过简单地在图像-序列对上进行训练来模拟图形组件和相关标记之间的关系。尽管我们在论文中使用数据合成，部分是为了证明我们的方法能够为各种平台生成GUI代码；如果人们只想关注基于网络的GUI，可能根本就不需要数据合成。事实上，人们可以设想通过抓取万维网来收集与渲染网站的截图相关的HTML/CSS代码数据集。考虑到网上已经有大量的网页，而且每天都有新的网站诞生，理论上网络可以提供几乎无限量的训练数据；有可能允许深度学习方法完全自动实现基于网络的图形用户界面。


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210709145237.png)


### 参考文献

[1] D. Bahdanau, K. Cho, and Y. Bengio. Neural machine translation by jointly learning to align
and translate. arXiv preprint arXiv:1409.0473, 2014.

[2] M. Balog, A. L. Gaunt, M. Brockschmidt, S. Nowozin, and D. Tarlow. Deepcoder: Learning to
write programs. arXiv preprint arXiv:1611.01989, 2016.

[3] B. Dai, D. Lin, R. Urtasun, and S. Fidler. Towards diverse and natural image descriptions via a
conditional gan. arXiv preprint arXiv:1703.06029, 2017.

[4] J. Donahue, L. Anne Hendricks, S. Guadarrama, M. Rohrbach, S. Venugopalan, K. Saenko, and
T. Darrell. Long-term recurrent convolutional networks for visual recognition and description.
In Proceedings of the IEEE conference on computer vision and pattern recognition, pages
2625–2634, 2015.

[5] A. L. Gaunt, M. Brockschmidt, R. Singh, N. Kushman, P. Kohli, J. Taylor, and D. Tarlow. Terpret:
A probabilistic programming language for program induction. arXiv preprint arXiv:1608.04428,
2016.

[6] F. A. Gers, J. Schmidhuber, and F. Cummins. Learning to forget: Continual prediction with
lstm. Neural computation, 12(10):2451–2471, 2000.

[7] I. Goodfellow, J. Pouget-Abadie, M. Mirza, B. Xu, D. Warde-Farley, S. Ozair, A. Courville, and
Y. Bengio. Generative adversarial nets. In Advances in neural information processing systems,
pages 2672–2680, 2014.

[8] A. Graves. Generating sequences with recurrent neural networks. arXiv preprint
arXiv:1308.0850, 2013.

[9] S. Hochreiter and J. Schmidhuber. Long short-term memory. Neural computation, 9(8):1735–
1780, 1997.

[10] A. Karpathy and L. Fei-Fei. Deep visual-semantic alignments for generating image descriptions.
In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages
3128–3137, 2015.

[11] A. Krizhevsky, I. Sutskever, and G. E. Hinton. Imagenet classification with deep convolutional
neural networks. In Advances in neural information processing systems, pages 1097–1105,
2012.

[12] W. Ling, E. Grefenstette, K. M. Hermann, T. Kocisk ˇ y, A. Senior, F. Wang, and P. Blunsom. `
Latent predictor networks for code generation. arXiv preprint arXiv:1603.06744, 2016.