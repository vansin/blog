# 线性代数复习及python&Octave实现

本文将使用Python和Octave实现基本的线性代数运算

## 矩阵加

```matlab
% The ; denotes we are going back to a new row.
A = [1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]

% Initialize a vector 
v = [1;2;3] 

% Get the dimension of the matrix A where m = rows and n = columns
[m,n] = size(A)

% You could also store it this way
dim_A = size(A)

% Get the dimension of the vector v 
dim_v = size(v)

% Now let's index into the 2nd row 3rd column of matrix A
A_23 = A(2,3)
```

## 矩阵数乘


## 矩阵乘法



```python
import numpy as np
A = np.mat([[1,2,3],[4,5,6],[7,8,9]])
B = np.mat([[1,2,3],[4,5,6],[7,8,9]])
C = A * B
```

## 矩阵转置


## 矩阵逆