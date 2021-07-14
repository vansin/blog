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

- histogram of oriented gradients descriptors[[196]](vansin.top)
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

## evaluation and protocols




## discussion and future directions