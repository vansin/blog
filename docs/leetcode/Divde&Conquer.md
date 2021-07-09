# 分治: Divde & Conquer

把问题分治成子问题，方便并行或者分布式计算

如果有重复计算，或者子问题记忆化

```python
def recursion(level, param1, param2, ...):

    if level>MAX_LEVEL:
        print
        return
    
    process_data(level, data...)

    self.recursion(level+1,p1, ...)

    reverse_state(level)
```

## [【LeetCode】50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)


Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

### 库函数法

> 面试不允许

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:

        return math.pow(x,n)
```


### 暴力法

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:

        if n==0:
            return 1

        if n>0:
            last_value = self.myPow(x,n-1)
            return x*last_value

        else:
            last_value = self.myPow(x, n+1)
            return (1.0/x)*last_value
```

### 分治

时间复杂程度: O(logN)

```python

class Solution:
    def myPow(self, x: float, n: int) -> float:

        # if not self.cal_memory:
        #     self.cal_memory = dict()
        if n==0:
            return 1
        
        if n==1:
            return x

        if n==-1:
            return 1.0/x
        
        if n % 2 == 0:
            y = self.myPow(x,n/2)
            return y*y

        else:
            if n>0:
                y = self.myPow(x,(n-1)/2)
                return (x)*y*y
            else:
                y = self.myPow(x,(n+1)/2)

                return (1.0/x)*y*y
```


优雅代码的版本

```python
class Solution:


    def myPow(self, x: float, n: int) -> float:

        if not n:
            return 1
        if n<0:
            return 1 / self.myPow(x, -n)

        if n%2:
            return x * self.myPow(x,n-1)
        
        return self.myPow(x*x,n/2)
```


### 非递归方法


```python
class Solution:
    def myPow(self, x: float, n: int) -> float:

        if n<0:
            x = 1/x
            n = -n
        pow = 1
        
        while n:
            if n & 1:
                pow*=x
            x *= x
            n >>=1
        return pow
```

## [【LeetCode】169. Majority Element](https://leetcode-cn.com/problems/majority-element/)


### hash方法 O(N)

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = nums.__len__()
        stat = collections.Counter(nums)
        for key, value in stat.items():
            # print(key,value)
            if value>n/2:
                return key
        # print(stat)
```

### 分治算法

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        def majority_element_rec(lo, hi) -> int:
            if lo == hi:
                return nums[lo]

            mid = (hi - lo) // 2 + lo
            left = majority_element_rec(lo, mid)
            right = majority_element_rec(mid + 1, hi)

            if left == right:
                return left

            left_count = sum(1 for i in range(lo, hi + 1) if nums[i] == left)
            right_count = sum(1 for i in range(lo, hi + 1) if nums[i] == right)

            return left if left_count > right_count else right

        return majority_element_rec(0, len(nums) - 1)
```