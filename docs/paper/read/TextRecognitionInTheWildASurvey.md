# Text Recognition in the Wild: A Survey(自然场景下的文字识别综述)

[网友已翻译好的文字入口](https://www.jianshu.com/p/4313b8653492)

1. summarize the fundamental problems and the state-of-the-art associated with scene text recognition
2. introduce  new insights and ideas
3. provide a comprehensive review of publicly available resources
4. point out directions for future work




## introduction

- background
- form
- noise
- access

### 相关应用

- image Search
- intelligent inspection
- industrial automation
- robot navigation
- instant translation

ICDAR Robust Reading Competitions

### STR与OCR的对比

- scene text recognition(STR)
- optical character recognition(OCR)

#### 自然场景文字检测识别难点的原因

- complex background
- various fonts
- imperfect imaging condition

|  OCR   | STR   |
|  ----  | ----  |
| Clean background  | Complex Background |
| Single color, regular font, consistent size, and uniform arrangement.  | Multiple colors, irregular fonts, different sizes, and diverse orientations. |
| Clear and frontal | Distorted by nonuniform illumination, low resolution, and motion blurring|
| Occupied the main part of the images | Captured randomly in its native environment |

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714144658.png)

### 自然场景下文字检测火的原因

- 智能手机等先进硬件的出现
- 深度学习算法的涌现
- 现实场景中市场的需求


## background

### Text in Images

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714154253.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714154357.png)


### 基本问题

- text localization
- text verification
- text detection
- text segmentation
- text recognition
- end-to-end system

#### text localization

早期方法

- color
- gradient
- stroke width transform
- maximally stable extremal regions(MSER)
- canny detector
- connected component analysis

近期方法

- deep neural networks

#### text verification

某些情况下，文字定位算法会不准确，所以需要对算法定位的图像进行验证

经典方法

- prior knowledge
- support vector machine (SVM) classifier
- conditional random fields(CRFs)

近期工作

- convolution neural network(CNN)

#### text detection

作为端对端系统的基石，给识别提供准确的图片

detection是一个基于regression和segmentation的方法

#### text segmentation

文本分割可分为

- text line segmentation
- character segmentation

#### text recognition

传统方法

- histogram of oriented gradients descriptors
- connected components
- stroke width transform

近期研究

- deep learning encoder-decoder frameworks
#### end-to-end system


输入场景图片，输出目标字符串的系统


### 相关问题和任务

- Script identification
- Text enhancement
- Text tracking
- Natural language processing

#### Script identification

分类问题：识别文本到具体的语种(中文 or 英文)

#### Text enhancement

- deconvolution
- learning-based methods
- sparse reconstruction

#### Text tracking

上下帧之间的文本跟踪

#### Natural language processing

自然语言处理的应用如下

- machine translation
- automatic summarization
- question answering
- relationship extraction

### 应用

- Intelligent transportation
- information extraction
- visual input and access(拔高了一个境界)

## METHODOLOGIES

早期方法

- histogram of oriented gradient descriptors
- connected components
- stroke width transform

深度学习方法的优势

- automation
- effectiveness
- generalization


### Cropped Scene Text Image Recognition

- segmentation-based methods
- segmentation-free methods
  - CTC-based methods
  - attention-based methods

- label embedding

#### segmentation-based methods

基于分割的方法一般经过以3个步骤

1. image preprocessing
2. character segmentation
3. character recognition

字符一个一个检测出来，然后组合成字符串

aforementioned methods rely on lexicons

#### segmentation free

直接检测一整行


### Image Preprocessing Stage(图像预处理阶段)


提高图像的质量，减小识别的难度

#### Background Removal(去除背景)

传统的二值化方法在文档图片上表现很好，但是在自然场景下表现很差

通过 generative adversarial networks(GANs)去除背景[论文链接](https://arxiv.org/abs/2001.04189)
#### Text Image Super-Resolution(TextSR)

传统方法

- bilinear
- bicubic
- designed filtering

#### Rectification

- Scale
- orientation

### Feature Representation Stage(特征提取阶段)


histogram of oriented gradients(HOG) feature
[191][133][190][173]


CNNs
[227][25][107][234][127]

VGGNet
[170][161][162][79][24][217][193]

ResNet
[66] [108], [44], [187], [163], [20], [197], [205], [94], [233], [216], [195], [4], [147], [242], [235]

DenseNet
[74], [47], [48]

Recursive CNNs
[91]

RCNN
[121]


combined CNNs with the attention mechanism
[47], [238], [76], [48], [98], [44]


However, the performance improvement comes at the cost of memory and computation consumption

A combination of the background removal technique [40] with simple feature extractors may be an alternative in future research

### Sequence Modeling Stage(序列建模)


[173], [161], [162], [108], [174], [189], [25], [107], [187], [47], [163], [127], [20], [94], [233], [216], [195], [4], [193], [197] 

as the sequence modeling module because of its ability to capture long-range dependencies.

BiLSTM很耗费计算资源

a sliding window or deep one-dimensional CNN to replace BiLSTM

### Prediction Stage(预测阶段)

CTC和注意力机制是主要的方法

- Connectionist temporal classification(CTC)
- the attention mechanism


#### Connectionist Temporal Classification

- The underlying methodology of CTC is sophisticated, which results in a largecomputational cost for long text sequences.
- CTC suffers from the peaky distribution problems[57], [131] and its performance usually degrades for repeated patterns.
- CTC can hardly be applied to two-dimensional (2D) prediction problems, such as irregular scene text recognition, where characters in the input text instance image are distributed in a spatial structure.
#### Attention Mechanism

在预测模型中注意力机制经常与RNN一起出现

- Applying to 2D prediction problems.
- Improving the construction of implicit language model
- Improving parallelization and reducing complexity
- Addressing attention drift

Both CTC and the attention mechanism have their strengths and limitations

#### Other potential Approaches

- combined CNNs with a CRF graphical model for unconstrained text recognition

### End to End system

Given a text image with a complex background as input, an end-to-end system aims to directly convert all text regions into string sequences.

https://github.com/MhLiao/TextBoxes

https://github.com/lvpengyuan/masktextspotter.caffe2


https://github.com/tonghe90/textspotter

https://github.com/jiangxiluning/FOTS.PyTorch

https://github.com/MhLiao/TextBoxes_plusplus

https://github.com/tonghe90/textspotter

https://github.com/msight-tech/research-charnet

https://github.com/Yuliang-Liu/bezier_curve_text_spotting


 
## Datasets

https://www.cnblogs.com/lillylin/p/6893500.html


### Synthetic Datasets

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714194002.png)


#### Synth90K

https://www.robots.ox.ac.uk/~vgg/data/text/



#### SynthText

https://github.com/ankush-me/SynthText

#### Verisimilar Sysnthesis

#### UnrealText

https://jyouhou.github.io/UnrealText/

### Realistic Datasets


### regular latin Datasets

#### IIIT5K-Words(IIIT5k)

#### Street View Text(SVT)

#### ICDAR 2003(IC03)

#### ICDAR 2011(IC11)

#### ICDAR 2013(IC13)

#### Street View House Number(SVHN)

SVHN is a real-world image dataset for developing machine learning and object recognition algorithms with minimal requirement on data preprocessing and formatting. It can be seen as similar in flavor to MNIST (e.g., the images are of small cropped digits), but incorporates an order of magnitude more labeled data (over 600,000 digit images) and comes from a significantly harder, unsolved, real world problem (recognizing digits and numbers in natural scene images). SVHN is obtained from house numbers in Google Street View images.



### Irregular Latin Datasets

#### StreetViewText-Perspective(SVT-P)
#### CUTE80(CUTE)
#### ICDAR 2015(IC15)
#### COCO-Text
#### Total-Text

Multilingual Datasets

#### Reading Chinese Text in the Wild(RCTW-17)
#### Muti-Type Web Images(MTWI)
#### Chinese Text in the Wild(CTW)
#### SCUT-CTW1500
#### Large-Scale Street View Text(LSVT)
#### Arbitrary-Shaped Text(ArT)
#### Reading Chinese Text on Signboard(ReCTS-25k)
#### Multi-lingual Text(MLT-2019)


## Evaluation protocols

#### Evaluation Protocols for Latin Text. Recognition protocols

- WAR
- WER

#### End-to-End Protocols

- Strongly Contextualised(S)

#### End-to-End Protocols



## discussion and future directions

#### Generalization

#### Evaluation


#### Data Issues


#### Scenarios


#### Image Preprocessing 


#### Ene-to-End Systems


#### Languages


#### Security


#### STR+NLP