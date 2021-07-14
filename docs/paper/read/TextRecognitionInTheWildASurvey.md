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


### Image Preprocessing Stage


### Feature Representation Stage


### Sequence Modeling Stage


### Prediction Stage

### Connectionist Temporal Classification

### Attention Mechanism

### Other potential Approaches

### End to End system

## evaluation and protocols

### Datasets


#### Synthetic Datasets

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714194002.png)


- Synth90K
- SynthText
- Verisimilar Sysnthesis
- UnrealText
- Evaluation protocols
- Discussion

#### Realistic Datasets


regular latin Datasets

- IIIT5K-Words(IIIT5k)
- Street View Text(SVT)
- ICDAR 2003(IC03)
- ICDAR 2011(IC11)
- ICDAR 2013(IC13)
- Street View House Number(SVHN)

Irregular Latin Datasets

- StreetViewText-Perspective(SVT-P)
- CUTE80(CUTE)
- ICDAR 2015(IC15)
- COCO-Text
- Total-Text

Multilingual Datasets

- Reading Chinese Text in the Wild(RCTW-17)
- Muti-Type Web Images(MTWI)
- Chinese Text in the Wild(CTW)
- SCUT-CTW1500
- Large-Scale Street View Text(LSVT)
- Arbitrary-Shaped Text(ArT)
- Reading Chinese Text on Signboard(ReCTS-25k)
- Multi-lingual Text(MLT-2019)


### Evaluation protocols

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