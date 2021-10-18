# 搞定softmax和交叉熵





## 1. 信息量的度量-熵

### 信息量

信息的多少与接收者说到的信息时感到的惊讶程度相关，信息所表达的事件越不可能发生，越不可预测，信息量就越大
$$
I=\log _a\frac{1}{P\left( x \right)}
$$
信息量的单位和上式中的a有关

- a=2,则信息量的单位为比特（bit）------最为常用
- a=e,则信息量的单位为奈特(nat)
- a=10,则信息量的单位为特莱(Hartley)



### 平均信息量

我们称平均信息量为熵，举个例子
$$
H\left( X \right) =-\Sigma \left( p_i \right) \log p\left( x_i \right)
$$

一离散信源有0,1,2,3这4个符号组成概率分别如下

| 0     | 1    | 2    | 3     |
| ----- | ---- | ---- | ----- |
| 0.375 | 0.25 | 0.25 | 0.125 |


$$
H\left( X \right) =-p_0\log _2P\left( x_0 \right) -p_1\log _2P\left( x_1 \right) -p_2\log _2P\left( x_2 \right) -p_3\log _2P\left( x_3 \right)
$$

$$
H\left( X \right) =-0.375\log _20.375-0.25\log _20.25-0.25\log _20.25-0.125\log _20.125=1.90564
$$

## 2. 交叉熵

以手写体数字识别为例为来生动的演示交叉熵
$$
H\left( p,q \right) =\underset{x}{\Sigma}p\left( x \right) \log \left( \frac{1}{q\left( x \right)} \right)
$$


$$
\left( image0 \right) \,\, label\,\,=\,\,\left[ \begin{array}{c}
	1\\
	0\\
	0\\
	0\\
\end{array} \right] \,\,predicate=\left[ \begin{array}{c}
	0.8\\
	0.1\\
	0.1\\
	0\\
\end{array} \right] 
\\
\left( image2 \right) \,\, label\,\,=\,\,\left[ \begin{array}{c}
	0\\
	0\\
	0\\
	1\\
\end{array} \right] \,\,predicate=\left[ \begin{array}{c}
	0.7\\
	0.1\\
	0.1\\
	0.1\\
\end{array} \right]
$$

$$
H\left( p,q \right) =-1\log _20.8-1\log _10.1
$$


## 3. softmax

$$
Y_i=\frac{e^{z_i}}{\Sigma _{i=1}^{n}e^{z_i}}
$$

$$
\text{请看以下例子，输入为Z},\text{输出为Y},\text{且Y各个概率之和为}1
$$


$$
z=\left[ \begin{array}{c}
	\mathrm{z}_1\\
	\mathrm{z}_2\\
	\mathrm{z}_3\\
\end{array} \right] =\left[ \begin{array}{c}
	3\\
	1\\
	-3\\
\end{array} \right]
$$

$$
\sum_{i=1}^3{e^{z_{\mathrm{i}}}}=\mathrm{e}^3+\mathrm{e}^1+\mathrm{e}^{-3}=22.8536
$$

$$
\text{第一步实现所有数映射为非负数}z'=\left[ \begin{array}{c}
	e^3\\
	e^1\\
	e^{-3}\\
\end{array} \right]
$$

$$
\sum_{i=1}^3{e^{z_{\mathrm{i}}}}=\mathrm{e}^3+\mathrm{e}^1+\mathrm{e}^{-3}=22.8536
$$


$$
\text{第二步实现所有数映射到0-1范围之内且和为1 } \mathrm{Y}=\frac{z'}{\sum_{i=1}^3{e^{z_{\mathrm{i}}}}}=\frac{\left[ \begin{array}{c}
	e^3\\
	e^1\\
	e^{-3}\\
\end{array} \right]}{\sum_{i=1}^3{e^{z_{\mathrm{i}}}}}=\frac{\left[ \begin{array}{c}
	e^3\\
	e^1\\
	e^{-3}\\
\end{array} \right]}{22.8536}=\frac{\left[ \begin{array}{c}
	20.0855\\
	2.71828\\
	0.0497871\\
\end{array} \right]}{22.8536}\approx \left[ \begin{array}{c}
	0.88\\
	0.12\\
	0\\
\end{array} \right]
$$


![img](https://pic2.zhimg.com/v2-11758fbc2fc5bbbc60106926625b3a4f_1440w.jpg?source=172ae18b)



## softmax输出作为交叉熵的输入



联合本文的第2部分和第3部分，softmax层的输出概率向量可以作为交叉熵损失函数的输入，用在分类问题上。


$$
\mathrm{Y}=\frac{z'}{\sum_{i=1}^3{e^{z_{\mathrm{i}}}}}=\frac{\left[ \begin{array}{c}
	e^3\\
	e^1\\
	e^{-3}\\
\end{array} \right]}{\sum_{i=1}^3{e^{z_{\mathrm{i}}}}}=\frac{\left[ \begin{array}{c}
	e^3\\
	e^1\\
	e^{-3}\\
\end{array} \right]}{22.8536}=\frac{\left[ \begin{array}{c}
	20.0855\\
	2.71828\\
	0.0497871\\
\end{array} \right]}{22.8536}\approx \left[ \begin{array}{c}
	0.88\\
	0.12\\
	0\\
\end{array} \right]
$$

$$
\mathrm{label} =\,\,\left[ \begin{array}{c}
	1\\
	0\\
	0\\
\end{array} \right]
$$


$$
\mathrm{H}\left( \mathrm{x} \right) =-\log _2\left( 0.88 \right) =0.184425
$$
