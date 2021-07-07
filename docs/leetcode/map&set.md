# map&set

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210707080642.png)

## HashTable & HashFunction&Collisions

### HashTable

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210707075244.png)

### Hash函数

上述例子中

### Hash碰撞处理

以下展示的是拉链法

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210707075813.png)


## List vs Map vs Set

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210707080233.png)

### List

平查找:O(n)

### Map

查找:O(1)

### Set

查找:O(1)

## HashMap，HashSet，TreeMap，TreeSet

Hash实现乱序但是快
Tree实现有序稍微慢


## 【LeetCode】242. Valid Anagram

### 题干

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### 排序对比法

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        list1 = ([char for char in s])
        list2 = ([char for char in t])

        list1.sort()
        list2.sort()

        if list1 == list2:
            return True

        else:
            return False
```

直接对字符排序是之前没有想到的

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        return sorted(s)==sorted(t)
```

### Set解题法


```python


```

## 【LeetCode】1. Two Sum


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        map = dict()

        for i,num in enumerate(nums):
            if target-num in map:
                return [map[target-num],i]
            else:
                map[num] = i
```

## 【LeetCode】15. 3Sum


### 暴力超时算法

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        ans_list = []

        nums_len = nums.__len__()

        for i in range(nums_len):
            for j in range(i,nums_len):
                for k in range(j,nums_len):
                    x = nums[i]
                    y = nums[j]
                    z = nums[k]
                    if i!=j and i!=k and j!=k and x+y+z == 0:
                        if (sorted([x,y,z])) not in ans_list:
                            ans_list.append(sorted([x,y,z]))
        
        return ans_list
```


### 双指针逼近法

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        ans_list = []
        nums.sort()

        print(nums)

        for i,num in enumerate(nums):

            left = i+1
            
            if i>0 and nums[i] == nums[i-1]:
                continue

            right = nums.__len__() - 1



            while left<right:
                s = nums[i] + nums[left] +nums[right]
                
                if s>0:
                    right-=1
                    continue

                if s<0:
                    left+=1
                    continue

                if s == 0:
                    ans_list.append([nums[i], nums[left], nums[right]])
                    while left<right and nums[left]==nums[left+1]:
                        left+=1
                    while left<right and nums[right] == nums[right-1]:
                        right-=1
                    
                    left+=1
                    right-=1
        return ans_list
```

### Map方法

```python

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        ans_list = []

        map = dict()

        for i,z in enumerate(nums):
            map[-z] = i
        
        nums_len = nums.__len__()

        for i in range(nums_len):
            for j in range(i,nums_len):
                    x = nums[i]
                    y = nums[j]

                    if x+y in map:
                        k = map[x+y]
                        z = -(x+y)

                        if i!=j and i!=k and j!=k:
                            if (sorted([x,y,z])) not in ans_list:
                                ans_list.append(sorted([x,y,z]))
        
        return ans_list

```

### Map Set方法巧用

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        ans_list = []

        nums.sort()

        res = set()

        for i,v in enumerate(nums[:-2]):
            if i>=1 and v == nums[i-1]:
                continue

            d = {}

            for x in nums[i+1:]:
                if x not in d:
                    d[-x-v] = 1
                else:
                    res.add((v,-v-x,x))
        
        ans_list = list(res)
        ans_list = [list(ans) for ans in ans_list]
        return ans_list
```

## 【LeetCode】18. 4Sum

### O(N^3)

#### 未剪枝
```python

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:

        ans_list = []
        nums.sort()
        nums_len = len(nums)
        res = set()
        print(nums)

        for i in range(0,nums_len-2):

            if i>=1 and nums[i] == nums[i-1]:
                continue

            for j in range(i+1,nums_len-1):
                if j>i+1 and nums[j-1]==nums[j]:
                    continue
                    
                map = {}
                for k in range(j+1,nums_len):
                    x = nums[k]

                    if x not in map:
                        map[target-nums[i]-nums[j]-nums[k]] = set({i,j,k})
                        # print(set({i,j,k}))
                    else:
                        # print(map[x],index_set)
                        if k not in map[x]:
                            set1 = tuple(sorted([nums[i],nums[j],target-nums[i]-nums[j]-nums[k],nums[k]]))
                            # print(set1)
                            res.add(set1)

        ans_list = list(res)
        ans_list = [list(ans) for ans in ans_list]
        return ans_list


```

#### 剪枝

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210707104444.png)

```python
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:

        ans_list = []
        nums.sort()
        nums_len = len(nums)
        res = set()
        # print(nums)


        for i in range(0,nums_len-2):

            if i > 0 and nums[i] == nums[i-1]:
                continue
            if nums[i] * 4 > target:
                break
            if nums[i] + 3 * nums[-1] < target:
                continue


            if i>=1 and nums[i] == nums[i-1]:
                continue

            for j in range(i+1,nums_len-1):
                if j > i + 1 and nums[j] == nums[j-1]:
                    continue
                if nums[i] + 3*nums[j] > target:
                    break
                if nums[i] + nums[j] + 2*nums[-1] < target:
                    continue

                map = {}
                for k in range(j+1,nums_len):

                    x = nums[k]

                    if x not in map:
                        map[target-nums[i]-nums[j]-nums[k]] = set({i,j,k})
                        # print(set({i,j,k}))
                    else:
                        # print(map[x],index_set)
                        if k not in map[x]:
                            # ans_list.append([nums[i],nums[j],target-nums[i]-nums[j]-nums[k],nums[k]])
                            set1 = tuple(sorted([nums[i],nums[j],target-nums[i]-nums[j]-nums[k],nums[k]]))
                            # print(set1)
                            res.add(set1)

        ans_list = list(res)
        ans_list = [list(ans) for ans in ans_list]
        return ans_list
```

### O(N^2)

```python

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []
        nums.sort()
        len_nums = len(nums)

        # hash后两个数的和，并保存索引
        table = {}
        for j in range(len_nums-1, 2, -1):
            if j < len_nums-1 and nums[j] == nums[j+1]:
                continue
            if 4 * nums[j] < target:
                break
            if nums[j] + 3*nums[0] > target:
                continue
            for i in range(j-1, 1, -1):
                if i < j-1 and nums[i] == nums[i+1]:
                    continue
                if nums[j] + 3*nums[i] < target:
                    break
                if nums[j] + nums[i] + 2*nums[0] > target:
                    continue
                table.setdefault(nums[i] + nums[j], []).append((i, j))

        # 枚举前两个数
        for i in range(len_nums-3):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            if nums[i] * 4 > target:
                break
            if nums[i] + 3 * nums[-1] < target:
                continue
            for j in range(i + 1, len_nums-2):
                if j > i + 1 and nums[j] == nums[j-1]:
                    continue
                if nums[i] + 3*nums[j] > target:
                    break
                if nums[i] + nums[j] + 2*nums[-1] < target:
                    continue
                for index, jndex in table.get(target - nums[i] - nums[j], []):
                    if j < index:
                        ans.append([nums[i], nums[j], nums[index], nums[jndex]])

        return ans

```