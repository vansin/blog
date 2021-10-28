# 常见Loss函数盘点

$$
\ell(x, y) = L = \{l_1,\dots,l_N\}^\top, \quad
        l_n = \left| x_n - y_n \right|,
$$

$$
\ell(x, y) =
        \begin{cases}
            \operatorname{mean}(L), & \text{if reduction} = \text{`mean';}\\
            \operatorname{sum}(L),  & \text{if reduction} = \text{`sum'.}
        \end{cases}
$$

Creates a criterion that measures the mean absolute error (MAE) between each element in the input 
$$
\ell(x, y) = L = \{l_1,\dots,l_N\}^\top, \quad
        l_n = \left| x_n - y_n \right|,
$$

$$
\ell(x, y) = L = \{l_1,\dots,l_N\}^\top, \quad
          l_n = - w_{y_n} \log \frac{\exp(x_{n,y_n})}{\sum_{c=1}^C \exp(x_{n,c})}
          \cdot \mathbb{1}\{y_n \not= \text{ignore\_index}\}
$$

$$
\ell(x, y) = \begin{cases}
              \sum_{n=1}^N \frac{1}{\sum_{n=1}^N w_{y_n} \cdot \mathbb{1}\{y_n \not= \text{ignore\_index}\}} l_n, &
               \text{if reduction} = \text{`mean';}\\
                \sum_{n=1}^N l_n,  &
                \text{if reduction} = \text{`sum'.}
            \end{cases}
$$


$$
\ell(x, y) = L = \{l_1,\dots,l_N\}^\top, \quad
          l_n = - \sum_{c=1}^C w_c \log \frac{\exp(x_{n,c})}{\exp(\sum_{i=1}^C x_{n,i})} y_{n,c}
$$

## 分类

### BCELoss

### CELoss

### FocalLoss

### QualityFocalLoss

### VarifocalLoss

### GaussianFocalLoss

### GHMC

### OHEM



## 回归

### L1/L2 Loss

### SmoothLoss

### BalancedL1Loss

### DistributionFocalLoss

### GHMR

### lou/BoundedIoU/GIoU/DIoU/CIoU Loss

### OHEM



### HUBER