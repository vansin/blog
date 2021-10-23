# 搞定二分法及其变体

二分法思想简单，当时其细节是魔鬼。

在一个有序的数组中，相比顺序索引的查找O(N)的时间复杂程度，二分法查找的时间复杂程度为O(log(N))



二分法使用场景：

- 有序数组
- 能索引访问
- 有明确边界



二分法题目汇总

|                                                              | 解题描述           |      |
| ------------------------------------------------------------ | ------------------ | ---- |
| [【LeetCode】69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/) | 稍微有变体         |      |
| [【LeetCode】367. Valid Perfect Square](https://leetcode-cn.com/problems/valid-perfect-square/) |                    |      |
| [【LeetCode】704. Binary Search](https://leetcode-cn.com/problems/binary-search/) |                    |      |
| [【LeetCode】33. Search in Rotated Sorted Array](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/) | 二分法变体         |      |
| [【LeetCode】34. Find First and Last Position of Element in Sorted Array](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | 先二分再向两端生长 |      |
| [【LeetCode】74. Search a 2D Matrix](https://leetcode-cn.com/problems/search-a-2d-matrix/) |                    |      |
| [【LeetCode】658. Find K Closest Elements](https://leetcode-cn.com/problems/find-k-closest-elements/) | 比较大的变体       |      |



```python
mid = l+(r-l) // 2
mid = (l+r) // 2
```



以上的语句能达到同样的效果，第一种能够防止溢出



## 二分法模板

### 基本模板

```python
left, right = 0, len(nums)-1
while left<=right:
    mid = (left + right) // 2

    if nums[mid] == target:
        break or return result

    elif nums[mid]<target:
        left = mid + 1
    else:
        right = mid - 1
```

- 为什么while循环中的条件是<=，而不是<

因为初始化**right**的赋值是**len(nums)-1**,即最后一个元素的索引，而不是**len(nums)**



### 寻找左侧边界模板


```python
def bisect_left(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e < x, and all e in
    a[i:] have e >= x.  So if x already appears in the list, a.insert(x) will
    insert just before the leftmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo
```

### 寻找右侧边界模板

```python
def bisect_right(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e <= x, and all e in
    a[i:] have e > x.  So if x already appears in the list, a.insert(x) will
    insert just after the rightmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    return lo

```

### 统一模板(只需要重点看这个模板)

[34. Find First and Last Position of Element in Sorted Array](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


```python


int binary_search(int[] nums, int target) {
    int left = 0, right = nums.length - 1; 
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1; 
        } else if(nums[mid] == target) {
            // 直接返回
            return mid;
        }
    }
    // 直接返回
    return -1;
}

int left_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定左侧边界
            right = mid - 1;
        }
    }
    // 最后要检查 left 越界的情况
    if (left >= nums.length || nums[left] != target)
        return -1;
    return left;
}


int right_bound(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }
    // 最后要检查 right 越界的情况
    if (right < 0 || nums[right] != target)
        return -1;
    return right;
}
```

#### python模板

```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        return [self.bi_left_search(nums, target), self.bi_right_search(nums, target)]

    def bi_left_search(self, nums, target):
        n = len(nums)
        l,r = 0, n-1
        while l<=r:
            mid = (l+r) // 2
            if nums[mid]<target:
                l = mid+1
            elif nums[mid]>target:
                r = mid-1
            else:
                r = mid-1
        if l>n-1 or nums[l] != target:
            return -1
        return l

    def bi_right_search(self, nums, target):

        n = len(nums)
        l,r = 0, n-1

        while l<=r:

            mid = (l+r) // 2
            if nums[mid]<target:
                l = mid+1
            elif nums[mid]>target:
                r = mid - 1
            else:
                l = mid + 1
        if r<0 or nums[r] != target:
            return -1

        return r
```





## [【LeetCode】69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)



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

## [【LeetCode】367. Valid Perfect Square](https://leetcode-cn.com/problems/valid-perfect-square/)


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

## [【LeetCode】704. Binary Search](https://leetcode-cn.com/problems/binary-search/)


```python 
class Solution:
    def search(self, nums: List[int], target: int) -> int:

        left, right = 0, len(nums) - 1

        while left<=right:

            mid = (left+right) // 2
            if nums[mid] == target:
                return mid

            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1
```


## [【LeetCode】33. Search in Rotated Sorted Array](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)

分段有序使用二分法的技巧

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:

        if not nums:
            return -1

        l,r = 0,len(nums)-1

        while l<=r:
            mid = (l+r) // 2

            if nums[mid] == target:
                return mid

            if nums[0]<= nums[mid]:
                # 左边有序
                if nums[0] <= target < nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1

            else:
                # 右边有序
                if nums[mid] < target <= nums[len(nums)-1]:

                    l = mid + 1
                else:
                    r = mid - 1

        return -1
```


## [【LeetCode】34. Find First and Last Position of Element in Sorted Array](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)


### 向两端生长

```python 

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        if len(nums) == 0:
            return [-1,-1]

        l,r = 0,len(nums)-1

        ans_l = -1
        ans_r = -1


        while l<=r:
            mid = (l+r) // 2
            if nums[mid] == target:
                ans_l, ans_r = mid, mid
                break

            if nums[mid]<target:
                l = mid + 1
            else:
                r = mid - 1
        print(ans_l, ans_r)

        while ans_l>0:
            if nums[ans_l] == nums[ans_l-1]:
                ans_l-=1
            else:
                break

        while ans_r<len(nums)-1 and ans_r != -1:
            if nums[ans_r] == nums[ans_r+1]:
                ans_r+=1
            else:
                break
        return [ans_l,ans_r]

```

### 两次使用二分法

```python

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:


        return [self.getPos(nums,target,0,nums.__len__()-1,0),self.getPos(nums,target,0,nums.__len__()-1,1)]


    def getPos(self, nums, target, left, right, sign = 0):

        if not nums: return -1

        while left <= right:

            mid = (left+right) // 2

            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            elif nums[mid] == target:

                if sign == 0:
                    if mid == 0 or nums[mid - 1] < target:
                        return mid
                    right = mid - 1
                else:
                    if mid == len(nums)-1 or nums[mid+1] > target:
                        return mid
                    left = mid + 1

        return -1

```

## [【LeetCode】35. Search Insert Position](https://leetcode-cn.com/problems/search-insert-position/)

```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, nums.__len__()-1
        while left<=right:
            mid = (left+right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            elif nums[mid] == target:
                return mid
        return left
```

## [【LeetCode】74. Search a 2D Matrix](https://leetcode-cn.com/problems/search-a-2d-matrix/)

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        self.m = matrix.__len__()
        if self.m == 0: return False

        self.n = matrix[0].__len__()
        if self.n == 0: return False

        l,r = 0, self.m*self.n-1

        while l<=r:

            mid = (l+r) // 2
            mid_x,mid_y = self.get_x_y(mid)

            if matrix[mid_x][mid_y]<target:
                l = mid + 1
            elif matrix[mid_x][mid_y]>target:
                r = mid - 1
            elif matrix[mid_x][mid_y] == target:
                return True
        
        return False


    def get_x_y(self, pos):

        x = pos // self.n
        y = pos % self.n

        return x,y
```



## 参考

https://labuladong.github.io/algo/1/6/

https://leetcode-cn.com/leetbook/detail/binary-search/
