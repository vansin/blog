# 通用目标检测算法指南及实现

[原文地址](https://medium.com/deci-ai/a-guide-to-common-object-detection-algorithms-and-implementations-455757ac9e20)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021202526.png)

目标检测是许多深度学习模型的关键组成部分，近年来经历了许多革命性的转变。目标检测是指识别图像中的对象并为每个对象提取边界框的过程。这些目标检测算法用于诸如自主驾驶，安全摄像头，机器人，以及几乎任何涉及视野的应用程序的领域的应用程序，包括医学成像或新趋势，如亚马逊Go Go-icilless杂货店。

多年来，主要挑战围绕着许多应用需要实时检测目标检测的事实。一些较新的实现具有更快的推论，并且允许不同的计算机愿景领域开发和成熟。每个新版本改善其前身的性能，我们现在看到了实时目标检测的启用。

尽管有令人兴奋的进步，但目的检测中最大的障碍之一是模型非常大而且很重。运行它们需要花费大量时间和计算能力。使用深度学习建模目标检测方面的挑战是两倍。首先，由于对象的大小和数量可以各不相同，因此网络必须能够应对这种可变性。其次，边界框的可能组合的数量是巨大的，这些网络往往需要计算得出要求。它已成为在实时速度下计算输出的斗争。

要了解这一障碍，也许可以做些什么来克服它，我们看一下可用于目标检测的不同技术以及该领域如何通过近期历史成熟。正如您将看到的，没有一个模型，最快，最准确。我们必须在速度和准确性之间处理权衡：一些型号更快地实现较低的准确性，反之亦然。让我们进入历史一点，以便您能够理解每个型号坐在此频谱上的位置。

## Basic types of object detection algorithms

有许多深入学习算法解决了目标检测问题。这些对象探测器有三个主要组件：

- **Backbone** for extracting features from the image
- **Feature network** that takes features from the backbone and outputs features to represent the characteristics of the image
- **Final (class/box) network** that uses these features to predict the class and location of an object

在我们走得太远之前，重要的是要提到对象探测器的评估方式。两个常见的评估指标是联盟（iou）和平均精度（ap）的交叉点。iou是地面真相边界框和预测边界框之间的重叠。它被计算为地面真理边界框和预测边界框之间的交叉区域，由其联盟区域除以。结果值是0到1之间的数字。数量越高，重叠越高。平均精度是精密召回曲线（AUC-PR）下的区域。在某些情况下，您可能会看到定义为AP50的指标，其中50个下标意味着在50％的IOU阈值下计算平均精度。当为许多类计算平均精度并且拍摄其平均值时，它被称为平均平均精度。

现在我们已准备好探索最近和常见的深度学习算法，您可以为下一个目标检测项目使用。



## Region-based models

基于地区的卷积神经网络使用一组区域提案来检测对象。更快的R-CNN是该物体探测器算法中的最新型号。它是R-CNN和FAST R-CNN的继承者。在看看更快的R-CNN之前，让我们花点时间考虑这些前辈。

### R-CNN

R-CNN模型通过将卷积神经网络与自下而上的区域建议相结合，使对象组合起来。R-CNN拍摄了最多2000个自下而上的区域建议的图像和提取物。区域提议是找到目标对象的高可能性的位置。然后，R-CNN使用大CNN来计算每个提出区域的特征。接下来，它使用类特定的线性支持向量机（SVM）对每个区域进行分类。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021202919.png)

R-CNN has a couple of drawbacks:

- **Training uses a multi-stage pipeline** that first obtains object proposals, fits an SVM to the ConvNet features, and finally learns the bounding box regressors. This multi-stage training is slower than single-stage training.
- **Training uses deep networks that consume a lot of time and space.** This means more time as well as more computational power.

- **Object detection is slow** because it performs a ConvNet forward pass for each object proposal.

### Fast R-CNN

FAST R-CNN是基于ConvNet的目标检测器，用于分类对象提案。然后，它将图像和一组对象提案作为输入。FAST R-CNN使用卷积和最大池层处理图像，并产生卷积特征图。然后，利益池地区使用MAX池来从每个区域提议中提取来自每个特征图的固定层向量。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021203034.png)

然后将特征向量馈送到完全连接的层，该层分支成两个输出。一个产生表示对象的边界框的四个值，而另一个输出是对象类的软邮件概率。边界框号表示左上角和右上角的两个数字，两个用于底部。

快速R-CNN改善R-CNN。它具有较高的平均平均精度，它是一个训练模型，它不需要磁盘存储来缓存其功能。

### Faster R-CNN

更快的R-CNN模型由两个模块组成：

- 深度卷积网络，负责提出区域（区域提案网络）
- 使用该区域的快速R-CNN探测器

该区域提案网络与目标检测网络共享全图像卷积功能。然后，目标检测网络预测对象的边界框和分数。接下来，FAST R-CNN模型使用来自区域提案网络的区域提案进行目标检测。然后通过共享卷积功能将区域提案网络和FAST R-CNN合并为单个网络。一般而言，更快的R-CNN模型接收图像并输出矩形对象提案。每个矩形都有一个对象分数。

TensorFlow文档提供了更快的R-CNN目标检测器API，您可以使用以最小的努力构建目标检测模型。您还可以使用预培训的更快的R-CNN模型立即运行预测。Tensorflow通过Tensorflow Hub提供预先训练的型号。

## Single Shot Detector (SSD)

在该模型中，图像中的对象被一个转发信号检测到。在训练阶段，SSD使用输入图像和每个对象的地面真相边界框。SSD使用单个神经网络预测图像中的对象。它使用前馈卷积神经网络，其产生边界框和分数用于存在物体。卷积特征层使得能够在多个尺度处检测对象。

SSD通过评估不同比例的一小组默认边界框。然后，每个框都预先预测形状的偏移和类别的置信度。默认框与培训期间与地面真相框匹配。匹配盒被视为阳性，而非匹配的盒子被视为消极。因此，SSD通过通过前馈卷积神经网络产生固定的边界框。然后它在这些框中的存在物体的分数。通过加权本地化损失和置信度损失来计算模型的损失。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021203516.png)

与其他目标检测模型一样，SSD使用用于特征提取的基础模型。它默认使用VGG-16网络作为骨干网络。

SSD更快，因为它需要单个向导。这与区域提案网络不同，需要两个镜头：

- One to generate the object proposals
- The other to detect objects from these proposals

On the [VOC2007 dataset,](http://host.robots.ox.ac.uk/pascal/VOC/voc2007/) SSD achieves a mean average precision score of 74.3% at 59 flops per second on an Nvidia TitanX.

## YOLO Models

YOLO models are also single-shot models. The first YOLO model, short for You Only Look Once, was [introduced in 2016](https://arxiv.org/pdf/1506.02640.pdf). The original proposal was to predict bounding boxes and class probabilities from an image, in a single evaluation using a single neural network. This first model would process 45 frames per second in real-time using features from the entire image to predict bounding boxes.

Yolo的最初实施有两个主要挑战：

- It could only predict one class
- It didn’t perform well on small objects

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021203715.png)

让我们花一点时间来看看更新和流行的YOLO版本。我们将用Yolo版本4滚动球。

### YOLO V4

- [CSPDarknet-53](https://paperswithcode.com/method/cspdarknet53) backbone for feature extraction
- [Spatial pyramid pooling](https://arxiv.org/abs/1406.4729) (SPP) and [path aggregation network(PAN](https://arxiv.org/abs/1803.01534)) to collect features from different stages
- [YOLO V3](https://github.com/ultralytics/yolov3) head for predicting classes and bounding boxes

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021203755.png)

让我们仔细看看这些组件。

CSPDarkNet-53是一种卷积神经网络，用作对象探测器的骨干。它基于DarkNet-53，一种使用残留连接的卷积神经网络，是Yolo的第三个版本的骨干。CSPDarkNet-53使用横级部分网络（CSPNET），将基层的特征映射分为两部分。该分区通过合并两部分来减少计算时间。

SPP是一种卷积神经网络架构，使用空间金字塔池来删除网络的固定尺寸约束。SPP层的输出被馈送到完全连接的层或其他分类器。PANET是一种网络，其具有借助于降低较低和最顶层特征级别之间的距离的特征，以获得可靠的信息传递。

YOLO V4推出了两种新方法来提高准确性：

- **Bag of freebies** — These are strategies that are applied to improve the performance of a model without increasing its latency at inference. One such strategy is data augmentation, whose goal is to expose the model to various images, hence making the model more robust. Photometric distortions and geometric distortions are two examples of augmentations on images that improve the object detector’s performance. Photometric distortions include adjusting contrast, hue, saturation, and brightness in images. Some geometric distortions that are applied to object detectors include random scaling, rotating, and cropping images.

- **Bag of Specials** — These are plugin modules and post-processing methods that increase the inference cost by a small amount while improving the object detector’s accuracy. The aim of the plugin modules is to enhance some model attributes such as enlarging the receptive field or strengthening feature integration capability. The post-processing methods are used to monitor the prediction results.

yolo v4提出了几种数据增强策略:

- **CutOut** — Combines images by cutting out part of one image and pasting it onto an augmented image

- **Mosaic data augmentation** — Mixes four training images. This enables the detection of objects outside their normal context.

- **Self-Adversarial Training (SAT)** — A new augmentation strategy that operates in two forward-backward stages. In the first stage, the network alters the original image instead of the network weights. The second stage involves training the neural network to identify an object in the altered image.

YOLO V4在TESLA V100上以每秒65帧的实时速度实现65.7％的平均精度（AP50）。

### YOLO V5

从yolo v5发布中出现了很多争议。基本上，它不是一个新的yolo版本，而是在Pytorch中实现了YOLO V4的实现。此版本的另一个争论的核心是开发人员没有发布任何可以进行对等审查的纸张。Alexey是Yolo V4的作者之一，对此进行了刺伤，并响应了YOLO V5的释放。您可以阅读他对此GitHub问题的评论。

GitHub上的YOLO V5的页面声称此版本比以前的YOLO版本更快。该页面还提供了可以立即下载并开始使用的预先训练的检查点。

## CenterNet

CenterNet is built upon the one-stage keypoint-based detector known as [CornerNet](https://arxiv.org/abs/1808.01244). CornerNet produces heatmaps for the top-left corners and the bottom-right corners. The heatmaps are locations of key points for different objects. Each keypoint is assigned a confidence score.

CornerNet also generates embeddings that are used to determine whether two corners belong to the same object. It generates offsets that can be used to learn how to remap the corners from the heatmaps to the input image.

CenterNet is a one-stage detector that detects each object as a triplet of keypoints, resulting in improved precision and recall. It explores the central part of a proposal. The idea is that if a bounding box has a high intersection over union with the ground truth box, then there is a high probability that the center key point in its central region is predicted as the same class. At inference, a proposal is determined to be an object, based on whether there is a central key point of the same class that falls within the proposal’s central region. The determination is done after a proposal is generated as a pair of corner points.

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021204240.png)

CenterNet由两个模块组成：级联角池和中心池。中心池模块在中央区域提供了更多可识别的信息，使得更容易确定区域建议的中心。该模块负责预测中心键盘。它使用对象的水平和垂直方向的最大值来预测中心键点。

级联角池池模块负责丰富由左上角和右下角收集的信息。级联角池池在对象的边界方向上的最大值以及对象的内部方向预测角落。

CenterNet与MS-Coco DataSet相比，在MS-Coco DataSet上实现了47％的平均精度，与现有的一级探测器相比增加了4.9％。

## EfficientDet

高效文件是Google引入的算法。它在高效网络上构建，并引入了一个新的双向特征网络（BIFPN）和新的缩放规则。高效设备优化目标检测器的组件以提高性能和效率。优化导致使用较少计算的小型模型。这些优化包括：

- **Employing EfficientNet for the backbone.** Applying EfficientNet-B increases accuracy by 3% while reducing computation by 20%.
- **Improving the efficiency of the feature networks.** This is done using a bi-directional feature network (BiFPN) that allows information to flow top-down and bottom-up while using regular and efficient connections. BiFPN is a type of feature pyramid network that allows fast and easy multi-scale feature fusion. It uses regular and efficient connections to allow information to flow in both top-down and bottom-up directions.
- **Improving efficiency further through a fast normalized fusion technique.** The observation is that since images have different resolutions, they contribute unequally to the final output features. This is addressed by weighting each input and allowing the network to learn the importance of each input feature.
- **Introduction of a new compound scaling method for object detectors that leads to better accuracy.** This is done using a simple compound coefficient that jointly scales up all resolution/depth/width of backbone, BiFPN, and class/box network.

On the COCO dataset, [EfficientDet-D7](https://github.com/google/automl/tree/master/efficientdet) achieves a mean average precision of 52.2.

