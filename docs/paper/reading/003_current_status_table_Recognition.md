# Current Status and Performance Analysis of Table Recognition in Document Images with Deep Neural Networks



**ABSTRACT** The first phase of table recognition is to detect the tabular area in a document. Subsequently, the tabular structures are recognized in the second phase in order to extract information from the respective cells. Table detection and structural recognition are pivotal problems in the domain of table understanding. However, table analysis is a perplexing task due to the colossal amount of diversity and asymmetry in tables. Therefore, it is an active area of research in document image analysis. Recent advances in the computing capabilities of graphical processing units have enabled the deep neural networks to outperform traditional state-of-the-art machine learning methods. Table understanding has substantially benefited from the recent breakthroughs in deep neural networks. However, there has not been a consolidated description of the deep learning methods for table detection and table structure recognition. This review paper provides a thorough analysis of the modern methodologies that utilize deep neural networks. This work provided a thorough understanding of the current state-of-the-art and related challenges of table understanding in document images. Furthermore, the leading datasets and their intricacies have been elaborated along with the quantitative results. Moreover, a brief overview is given regarding the promising directions that can serve as a guide to further improve table analysis in document images.

## INDEX TERMS 

Deep neural network, document images, deep learning, performance evaluation, table recognition, table detection, table structure recognition, table analysis.



## I. INTRODUCTION



TABLE understanding has gained an immense attraction since the last decade. Tables are the prevalent means of representing and communicating structured data [1]. With the rise of Deep Neural Networks (DNN), various datasets for table detection, segmentation, and recognition have been published [2], [3]. This allows the researchers to employ the DNN to improve state-of-the-art results.

Previously, the problem of table recognition has been treated with traditional approaches [4]–[7]. One of the ear- lier works in the area of table analysis has been done by Kieninger *et al.* [8]–[10]. Along with detecting the tabular area, their system known as T-Recs extracts the structural information of the tables.

Later, machine learning techniques are applied to detect the table. One of the pioneers are Cesarini *et* *al.* [11]. Their proposed system, Tabfinder converts a document into an MXY tree which is a hierarchical representation of the document. It searches for a block region in the horizontal and vertical parallel lines, and then a depth-first search to handle noisy document images leads to a tabular region. Silva *et al.*

[12] adopted rich Hidden-Markov-Models to detect tabular area based on joint probability distributions.

Support Vector Machines (SVM) [13] have also been ex- ploited along with some handcrafted features to detect tables [14]. *Fan et al.* [15] tried to detect tables by the fusion of various classifiers trained on linguistic and layout informa- tion of documents. Another work carried out by *Tran* *et* *al.*

[16] uses a region of interest to detect tables in document images. These regions are further filtered as tables if the text block present in the region of interest satisfies a specific set of rules.

Comprehensive research is conducted by *Wang et al.* [17] focusing not only on the problem of table detection but table



## II. RELATED WORK



## III. METHODOLOGIES

### A. TABLEDETECTION

#### 1) Object Detection Algorithms

#### a: Transfer Learning

#### b: Faster R-CNN

#### c: Deformable Convolutions

#### d: YOLO

#### e: Mask R-CNN, YOLO, SSD and Retina Net

#### f: Cascade Mask R-CNN



#### 2) Semantic Image Segmentation In

#### a: Fully Convolutional Networks





#### 3) Graph Neural Networks



#### 4) Generative Adversarial Networks