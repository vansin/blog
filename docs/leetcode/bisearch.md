# 二分法

- 有序数组
- 能索引访问
- 有明确边界

## 二分法模板


```python
left, right = 0, len(array)-1
while left<=right:
    mid = (left + right) / 2

    if array[mid] == target:
        break or return result

    elif array[mid]<target:
        left = mid + 1
    else:
        right = mid - 1
```

## [1.【LeetCode】69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)



```python

class Solution:
    def mySqrt(self, x: int) -> int:

        left, right = 0, x

        while right-left >= 0.000001:

            mid = (left+right) / 2

            if mid*mid == x:
                return int(mid)

            if mid*mid < x:
                left = mid
            else:
                right = mid
        
        return int(right)

```

## [2.【LeetCode】367. Valid Perfect Square](https://leetcode-cn.com/problems/valid-perfect-square/)


```python
class Solution:
    def isPerfectSquare(self, num: int) -> bool:

        left, right = 0 ,num


        while right>=left:

            mid = (left+right) // 2

            if mid*mid == num:
                return True
            
            if mid*mid < num:
                left = mid+1
            else:
                right = mid-1

        return False
```