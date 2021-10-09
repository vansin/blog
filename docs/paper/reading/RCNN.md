# RCNN

首次将CNN引入到目标检测领域，UC Berkeley出品



以往的特征提取往往使用SIFT 和 HOG方法



## 方法

1、SS提取RP；

2、CNN提取特征；

3、SVM分类；

4、BBox回归 ;

## 缺点

1、 训练步骤繁琐（微调网络+训练SVM+训练bbox）；

2、 训练、[测试](http://lib.csdn.net/base/softwaretest)均速度慢 ；

3、 训练占空间



## 改进

1、 从DPM HSC的34.3%直接提升到了66%（mAP）；

2、 引入RP+CNN



## Reference

[Mendeley笔记地址](https://www.mendeley.com/reference-manager/reader/b3c0cbeb-aa1c-3938-90df-5afa4911da2c/1da533d9-f596-1667-341e-1b0dc7272d10)

[Rich feature hierarchies for accurate object detection and semantic segmentation](https://arxiv.org/abs/1311.2524)

