---
theme: smartblue
highlight: a11y-dark
---
# 梯度下降优化算法综述

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/v2-4a3b4a39ab8e5c556359147b882b4788_1440w.gif)

## 优化器

以下为笔者阅读pytorch源码和相关论文，整理出来的pytorch实现的常用优化器

| 优化器     | 简介                                                         | Pytorch是否实现 | 发表时间 | 论文地址                                                     |
| ---------- | ------------------------------------------------------------ | --------------- | -------- | ------------------------------------------------------------ |
| Adadelta   | 一种自适应学习速率方法                                       | 是              | *2012*   | https://arxiv.org/abs/1212.5701                              |
| Adagrad    | Adaptive Subgradient Methods for Online Learning  and Stochastic Optimization | 是              | 2011     | http://jmlr.org/papers/v12/duchi11a.html                     |
| Adam       | A Method for Stochastic Optimization                         | 是              | *2014*   | https://arxiv.org/abs/1412.6980<br />https://openreview.net/forum?id=ryQu7f-RZ |
| AdamW      | A Method for Stochastic Optimization                         | 是              | *2014*   | https://arxiv.org/abs/1412.6980                              |
| SparseAdam | A Method for Stochastic Optimization                         | 是              | *2014*   | https://arxiv.org/abs/1412.6980                              |
| Adamax     | A Method for Stochastic Optimization                         | 是              | *2014*   | https://arxiv.org/abs/1412.6980                              |
| RAdam      | On the variance of the adaptive learning rate and beyond     | 是              | *2020*   | https://arxiv.org/abs/1908.03265                             |
| NAdam      | Incorporating Nesterov Momentum into Adam                    | 是              | 2016     | https://openreview.net/forum?id=OM0jvwB8jIp57ZJjtNEZ         |
| SGD        | 随机梯度下降法                                               | 是              |          | http://www.cs.toronto.edu/%7Ehinton/absps/momentum.pdf       |
| ASGD       | Acceleration of stochastic approximation by averaging        | 是              |          | https://dl.acm.org/citation.cfm?id=131098                    |

###  **Batch gradient descent**


$$
\theta = \theta - \eta \cdot \nabla_\theta J( \theta)
$$


由于我们需要计算整个数据集的梯度来只执行一次更新，因此批处理梯度下降可能非常慢，并且对于不适合内存的数据集是难以处理的。批处理梯度下降也不允许我们在线更新我们的模型，即。有新的例子。在代码中，批处理梯度下降似乎是这样的：

```python
for i in range(nb_epochs):
  params_grad = evaluate_gradient(loss_function, data, params)
  params = params - learning_rate * params_grad
```

​		对于预定义的时代数，我们首先计算整个数据集w.r.t.的损失函数的梯度向量params_grad我们的参数向量参数。请注意，最先进的深度学习库提供了自动分化，有效地计算梯度w.r.t.一些参数。如果你自己推导出梯度，那么梯度检查是一个好主意。

​		然后，我们沿着梯度的方向更新参数，学习率决定我们执行的更新有多大。保证了批梯度下降收敛于凸误差曲面的全局最小值，并收敛到非凸曲面的局部最小值。

### SGD

  http://www.cs.toronto.edu/%7Ehinton/absps/momentum.pdf
$$
            \begin{aligned}
                v_{t+1} & = \mu * v_{t} + g_{t+1}, \\
                p_{t+1} & = p_{t} - \text{lr} * v_{t+1},
            \end{aligned}
$$

$$
            \begin{aligned}
                v_{t+1} & = \mu * v_{t} + \text{lr} * g_{t+1}, \\
                p_{t+1} & = p_{t} - v_{t+1}.
            \end{aligned}
$$





### ASGD

​    https://dl.acm.org/citation.cfm?id=131098



### Adadelta

https://arxiv.org/abs/1212.5701

在本技术报告中，我们引入了一种仅基于一阶信息的新学习率方法，在MNIST和大规模语音识别数据集上显示了良好的效果。与SGD相比，该方法的计算开销很小，同时提供了每个维的学习率。尽管输入数据类型、隐藏单元数量、非线性和分布副本数量存在很大差异，但超参数不需要调整，这表明adadelta是一种鲁棒的学习率方法，可以应用于各种情况。

### Adagrad

在线学习和随机优化的自适应次梯度方法

http://jmlr.org/papers/v12/duchi11a.html

我们提出了一个新的子梯度方法家族，动态地结合在早期迭代中观察到的数据的几何知识，以执行更多信息的基于梯度的学习。隐喻上，这种适应使我们能够以非常预测但很少看到的形式在干草堆中找到针。我们的范例源于在随机优化和在线学习方面的最新进展，这些进展使用近端函数来控制算法的梯度步骤。我们描述并分析了一种自适应修改近端函数的装置，它显著简化了学习速率的设置，并导致遗憾保证被证明与事后可以选择的最佳近端函数一样好。本文给出了针对具有常见和重要的正则化函数和域约束的经验风险最小化问题的几种有效算法。我们通过实验研究了我们的理论分析，并表明，自适应亚梯度方法优于最先进的，但非自适应的，亚梯度算法。



### Adam

[[1412.6980\] Adam: A Method for Stochastic Optimization (arxiv.org)](https://arxiv.org/abs/1412.6980)

我们介绍了一种基于低阶矩的自适应估计的基于一阶梯度的随机目标函数优化算法Adam。该方法易于实现，计算效率高，内存要求小，对梯度的对角线重新缩放不变，非常适合在数据和/或参数方面较大的问题。该方法也适用于非平稳目标和具有非常有噪声和/或稀疏梯度的问题。超参数有直观的解释，通常不需要什么调优。讨论了与亚当受到启发的相关算法的一些联系。我们还分析了算法的理论收敛性，并给出了与在线凸优化框架下的结果相似的遗憾界。实证结果表明，亚当在实践中效果较好，且优于其他随机优化方法。最后，我们讨论了基于无限范数的亚当的一个变体AdaMax。
$$
\begin{aligned}
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{input}      : \gamma \text{ (lr)}, \beta_1, \beta_2
                \text{ (betas)},\theta_0 \text{ (params)},f(\theta) \text{ (objective)}          \\
            &\hspace{13mm}      \lambda \text{ (weight decay)},  \: amsgrad                      \\
            &\textbf{initialize} :  m_0 \leftarrow 0 \text{ ( first moment)},
                v_0\leftarrow 0 \text{ (second moment)},\: \widehat{v_0}^{max}\leftarrow 0\\[-1.ex]
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{for} \: t=1 \: \textbf{to} \: \ldots \: \textbf{do}                         \\
            &\hspace{5mm}g_t           \leftarrow   \nabla_{\theta} f_t (\theta_{t-1})           \\
            &\hspace{5mm}\textbf{if} \: \lambda \neq 0                                           \\
            &\hspace{10mm} g_t \leftarrow g_t + \lambda  \theta_{t-1}                            \\
            &\hspace{5mm}m_t           \leftarrow   \beta_1 m_{t-1} + (1 - \beta_1) g_t          \\
            &\hspace{5mm}v_t           \leftarrow   \beta_2 v_{t-1} + (1-\beta_2) g^2_t          \\
            &\hspace{5mm}\widehat{m_t} \leftarrow   m_t/\big(1-\beta_1^t \big)                   \\
            &\hspace{5mm}\widehat{v_t} \leftarrow   v_t/\big(1-\beta_2^t \big)                   \\
            &\hspace{5mm}\textbf{if} \: amsgrad                                                  \\
            &\hspace{10mm}\widehat{v_t}^{max} \leftarrow \mathrm{max}(\widehat{v_t}^{max},
                \widehat{v_t})                                                                   \\
            &\hspace{10mm}\theta_t \leftarrow \theta_{t-1} - \gamma \widehat{m_t}/
                \big(\sqrt{\widehat{v_t}^{max}} + \epsilon \big)                                 \\
            &\hspace{5mm}\textbf{else}                                                           \\
            &\hspace{10mm}\theta_t \leftarrow \theta_{t-1} - \gamma \widehat{m_t}/
                \big(\sqrt{\widehat{v_t}} + \epsilon \big)                                       \\
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
            &\bf{return} \:  \theta_t                                                     \\[-1.ex]
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
       \end{aligned}
$$


### Adamax

我们介绍了一种简单且计算效率高的基于梯度的随机目标函数优化算法。我们的方法旨在针对具有大数据集和/或高维参数空间的机器学习问题。该方法结合了最近流行的两种优化方法的优点：AdaGrad处理稀疏梯度的能力和RMSProp处理非平稳目标的能力。该方法实现简单，内存少。实验证实了对凸问题中收敛率的分析。总的来说，我们发现Adam是鲁棒的，并且非常适合现场机器学习中广泛的非凸优化问题。

### AdamW

​    https://arxiv.org/abs/1412.6980

​    https://arxiv.org/abs/1711.05101

​    https://openreview.net/forum?id=ryQu7f-RZ

### NAdam

​    https://openreview.net/forum?id=OM0jvwB8jIp57ZJjtNEZ
$$
\begin{aligned}
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{input}      : \gamma_t \text{ (lr)}, \: \beta_1,\beta_2 \text{ (betas)},
                \: \theta_0 \text{ (params)}, \: f(\theta) \text{ (objective)}                   \\
            &\hspace{13mm} \: \lambda \text{ (weight decay)}, \:\psi \text{ (momentum decay)}    \\
            &\textbf{initialize} :  m_0 \leftarrow 0 \text{ ( first moment)},
                v_0 \leftarrow 0 \text{ ( second moment)}                                 \\[-1.ex]
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{for} \: t=1 \: \textbf{to} \: \ldots \: \textbf{do}                         \\
            &\hspace{5mm}g_t           \leftarrow   \nabla_{\theta} f_t (\theta_{t-1})           \\
            &\hspace{5mm}if \: \lambda \neq 0                                                    \\
            &\hspace{10mm} g_t \leftarrow g_t + \lambda \theta_{t-1}                             \\
            &\hspace{5mm} \mu_t \leftarrow \beta_1 \big(1 - \frac{1}{2}  0.96^{t \psi} \big)     \\
            &\hspace{5mm} \mu_{t+1} \leftarrow \beta_1 \big(1 - \frac{1}{2} 0.96^{(t+1)\psi}\big)\\
            &\hspace{5mm}m_t           \leftarrow   \beta_1 m_{t-1} + (1 - \beta_1) g_t          \\
            &\hspace{5mm}v_t           \leftarrow   \beta_2 v_{t-1} + (1-\beta_2) g^2_t          \\
            &\hspace{5mm}\widehat{m_t} \leftarrow \mu_{t+1} m_t/(1-\prod_{i=1}^{t+1}\mu_i)\\[-1.ex]
            & \hspace{11mm} + (1-\mu_t) g_t /(1-\prod_{i=1}^{t} \mu_{i})                         \\
            &\hspace{5mm}\widehat{v_t} \leftarrow   v_t/\big(1-\beta_2^t \big)                   \\
            &\hspace{5mm}\theta_t \leftarrow \theta_{t-1} - \gamma \widehat{m_t}/
                \big(\sqrt{\widehat{v_t}} + \epsilon \big)                                       \\
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
            &\bf{return} \:  \theta_t                                                     \\[-1.ex]
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
       \end{aligned}
$$


### RAdam

​    https://arxiv.org/abs/1908.03265

### SparseAdam

https://arxiv.org/abs/1412.6980





### Rprop

反向传播

### RMSprop

https://arxiv.org/pdf/1308.0850v5.pdf
$$
\begin{aligned}
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{input}      : \alpha \text{ (alpha)},\: \gamma \text{ (lr)},
                \: \theta_0 \text{ (params)}, \: f(\theta) \text{ (objective)}                   \\
            &\hspace{13mm}   \lambda \text{ (weight decay)},\: \mu \text{ (momentum)},\: centered\\
            &\textbf{initialize} : v_0 \leftarrow 0 \text{ (square average)}, \:
                \textbf{b}_0 \leftarrow 0 \text{ (buffer)}, \: g^{ave}_0 \leftarrow 0     \\[-1.ex]
            &\rule{110mm}{0.4pt}                                                                 \\
            &\textbf{for} \: t=1 \: \textbf{to} \: \ldots \: \textbf{do}                         \\
            &\hspace{5mm}g_t           \leftarrow   \nabla_{\theta} f_t (\theta_{t-1})           \\
            &\hspace{5mm}if \: \lambda \neq 0                                                    \\
            &\hspace{10mm} g_t \leftarrow g_t + \lambda  \theta_{t-1}                            \\
            &\hspace{5mm}v_t           \leftarrow   \alpha v_{t-1} + (1 - \alpha) g^2_t
                \hspace{8mm}                                                                     \\
            &\hspace{5mm} \tilde{v_t} \leftarrow v_t                                             \\
            &\hspace{5mm}if \: centered                                                          \\
            &\hspace{10mm} g^{ave}_t \leftarrow g^{ave}_{t-1} \alpha + (1-\alpha) g_t            \\
            &\hspace{10mm} \tilde{v_t} \leftarrow \tilde{v_t} -  \big(g^{ave}_{t} \big)^2        \\
            &\hspace{5mm}if \: \mu > 0                                                           \\
            &\hspace{10mm} \textbf{b}_t\leftarrow \mu \textbf{b}_{t-1} +
                g_t/ \big(\sqrt{\tilde{v_t}} +  \epsilon \big)                                   \\
            &\hspace{10mm} \theta_t \leftarrow \theta_{t-1} - \gamma \textbf{b}_t                \\
            &\hspace{5mm} else                                                                   \\
            &\hspace{10mm}\theta_t      \leftarrow   \theta_{t-1} -
                \gamma  g_t/ \big(\sqrt{\tilde{v_t}} + \epsilon \big)  \hspace{3mm}              \\
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
            &\bf{return} \:  \theta_t                                                     \\[-1.ex]
            &\rule{110mm}{0.4pt}                                                          \\[-1.ex]
       \end{aligned}
$$




## 参考文献

https://arxiv.org/pdf/1609.04747.pdf









