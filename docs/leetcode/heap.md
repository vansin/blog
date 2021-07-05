# 二叉堆（堆图例&Python堆标准库heapq源码剖析）

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/heap.png)

本文主要分为以下三大部分

- 通过图例展示堆节点的插入、堆顶的弹出和堆的建立来理解二叉堆的原理
- 剖析Python标准库heapq源码中的算法实现
- 利用Python标准库heapq刷LeetCode题目（不必自己手写，大大提高效率）

在本文正式开始之前我们要知道的是堆有很多种实现方式，本文只讨论其中效率较低的经典二叉堆的建立、调整与删除。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705115419.png)

## 图例展示堆理论


经典二叉堆一般有以下两种分类，图例部分以最大堆为展示案例

- 最大堆（**父节点**要大于等于**左孩子节点**和**右孩子节点**）
- 最小堆（**父节点**要小于等于**左孩子节点**和**右孩子节点**）


### 堆插入操作


- 时间复杂程度: O(logN)
- 新节点添加到堆尾，新节点向上浮，相关节点下浮

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705080446.png)

<p align="center">初始化后的最大堆</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705080533.png)

<p align="center">在堆末尾添加节点53</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705080748.png)

<p align="center">53比父节点19大 交换</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705080946.png)

<p align="center">53比父节点36大 交换</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705081104.png)

<p align="center">53比父节点90小 插入调整完毕</p>

### 弹出堆顶元素操作

- 时间复杂程度: O(logN)
- 堆顶相关元素上浮

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705081425.png)

<p align="center">提取堆顶元素90</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705081558.png)

<p align="center">把堆尾元素放到堆顶</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705082022.png)

<p align="center">和比自己大且最大的孩子交换（19和53交换而不是19与26）</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705082044.png)
<p align="center">和比自己大且最大的孩子交换（19和36交换而不是19与25）</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705082200.png)
<p align="center">调整完毕</p>

### 建堆

[2,7,26,25,19,17,1,90,3,36]

#### 方式一： 插入法

时间复杂程度：O(Nlog(N))

#### 方式二： 非叶节点孩子上升法

原数组保持不变

时间复杂程度：O(N)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084127.png)
<p align="center">下沉19</p>


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084211.png)
<p align="center">下沉25</p>


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084301.png)
<p align="center">下沉26(比孩子节点大无需下沉)</p>


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084409.png)
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084428.png)

<p align="center">下沉7</p>

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084557.png)
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084622.png)
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084640.png)
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705084737.png)
<p align="center">下沉2，建堆完毕</p>



## [python最小堆实现](https://github.com/python/cpython/blob/3.9/Lib/heapq.py)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705094633.png)


python标准库实现了**最小堆**并对外暴露如下接口

- heappush(heap, item) 
- item = heappop(heap) 
- item = heapreplace(heap, item)
- item = heappushpop(heap, item)
- heapify(x)
- merge(*iterables, key=None, reverse=False)
- nsmallest(n, iterable, key=None)
- nlargest(n, iterable, key=None)

还未对外暴露的关键_siftdown和_siftup二叉堆调整函数

### _siftdown(heap, startpos, pos)

```python
# 'heap' is a heap at all indices >= startpos, except possibly for pos.  pos
# is the index of a leaf with a possibly out-of-order value.  Restore the
# heap invariant.
def _siftdown(heap, startpos, pos):
    newitem = heap[pos]
    # Follow the path to the root, moving parents down until finding a place
    # newitem fits.
    while pos > startpos:
        parentpos = (pos - 1) >> 1
        parent = heap[parentpos]
        if newitem < parent:
            heap[pos] = parent
            pos = parentpos
            continue
        break
    heap[pos] = newitem
```

### _siftup(heap, pos)

```python 
def _siftup(heap, pos):
    endpos = len(heap)
    startpos = pos
    newitem = heap[pos]
    # Bubble up the smaller child until hitting a leaf.
    childpos = 2*pos + 1    # leftmost child position
    while childpos < endpos:
        # Set childpos to index of smaller child.
        rightpos = childpos + 1
        if rightpos < endpos and not heap[childpos] < heap[rightpos]:
            childpos = rightpos
        # Move the smaller child up.
        heap[pos] = heap[childpos]
        pos = childpos
        childpos = 2*pos + 1
    # The leaf at pos is empty now.  Put newitem there, and bubble it up
    # to its final resting place (by sifting its parents down).
    heap[pos] = newitem
    _siftdown(heap, startpos, pos)
```



### heappush(heap, item) 

最小堆中push一个元素

```python
def heappush(heap, item):
    """Push item onto heap, maintaining the heap invariant."""
    heap.append(item)
    _siftdown(heap, 0, len(heap)-1)
```

### item = heappop(heap) 

弹出堆顶元素

```python
def heappop(heap):
    """Pop the smallest item off the heap, maintaining the heap invariant."""
    lastelt = heap.pop()    # raises appropriate IndexError if heap is empty
    if heap:
        returnitem = heap[0]
        heap[0] = lastelt
        _siftup(heap, 0)
        return returnitem
    return lastelt
```

### item = heapreplace(heap, item)

先弹出并返回最小的堆顶元素，后添加一个新元素

```python
def heapreplace(heap, item):
    """Pop and return the current smallest value, and add the new item.
    This is more efficient than heappop() followed by heappush(), and can be
    more appropriate when using a fixed-size heap.  Note that the value
    returned may be larger than item!  That constrains reasonable uses of
    this routine unless written as part of a conditional replacement:
        if item > heap[0]:
            item = heapreplace(heap, item)
    """
    returnitem = heap[0]    # raises appropriate IndexError if heap is empty
    heap[0] = item
    _siftup(heap, 0)
    return returnitem
```

### heappushpop
更快的实现先在堆中添加一个元素，后从堆顶弹出并返回最小的元素
```python
def heappushpop(heap, item):
    """Fast version of a heappush followed by a heappop."""
    if heap and heap[0] < item:
        item, heap[0] = heap[0], item
        _siftup(heap, 0)
    return item
```

### heapify(x)
Transform list into a heap, in-place, in O(len(x)) time.
将列表在原地以时间复杂程度为O(len(x))转化为一个最小堆

```python
def heapify(x):
    """Transform list into a heap, in-place, in O(len(x)) time."""
    n = len(x)
    # Transform bottom-up.  The largest index there's any point to looking at
    # is the largest with a child index in-range, so must have 2*i + 1 < n,
    # or i < (n-1)/2.  If n is even = 2*j, this is (2*j-1)/2 = j-1/2 so
    # j-1 is the largest, which is n//2 - 1.  If n is odd = 2*j+1, this is
    # (2*j+1-1)/2 = j so j-1 is the largest, and that's again n//2-1.
    for i in reversed(range(n//2)):
        _siftup(x, i)
```


### heap = []

creates an empty heap
创建一个空堆

### item = heap[0]

读取堆顶元素（不弹出）

## [python最大堆实现](https://github.com/python/cpython/blob/3.9/Lib/heapq.py)

python标准库实现了**最大堆**，但并未对外暴露

- _heappush_max(heap) (标准库未实现，准备提PR)
- item = _heappop_max(heap)
- item = _heappop_max(heap)
- item = _heapreplace_max(heap, item)

### _heappush_max(heap) (标准库未实现，准备提PR)

```python
def _heappush_max(heap, item):
    """Maxheap version of a heappush."""
    heap.append(item)
    _siftdown_max(heap, 0, len(heap)-1)
```

### item = _heappop_max(heap)

```python
def _heappop_max(heap):
    """Maxheap version of a heappop."""
    lastelt = heap.pop()    # raises appropriate IndexError if heap is empty
    if heap:
        returnitem = heap[0]
        heap[0] = lastelt
        _siftup_max(heap, 0)
        return returnitem
    return lastelt
```

### item = _heapreplace_max(heap, item)

```python
def _heapreplace_max(heap, item):
    """Maxheap version of a heappop followed by a heappush."""
    returnitem = heap[0]    # raises appropriate IndexError if heap is empty
    heap[0] = item
    _siftup_max(heap, 0)
    return returnitem
```

### _heapify_max(x)

```python 

def _heapify_max(x):
    """Transform list into a maxheap, in-place, in O(len(x)) time."""
    n = len(x)
    for i in reversed(range(n//2)):
        _siftup_max(x, i)

```


## [Kth Largest Element in a Stream](https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/)

### 简要题目

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.


Implement KthLargest class:

- KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
- int add(int val) Returns the element representing the kth largest element in the stream.


### 暴力解法

```js
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.array = new Array()
    // console.log(this.array)
    this.array = this.array.concat(nums)
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.array.push(val)
    this.array.sort(((a,b)=>b-a))

    if (this.k>this.array.length) {
        return null
    }    
    return this.array[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
```

### 利用最小堆解题

在笔试时通过使用Python的heapq接口而不是自己手动实现heap，能够大大提高答题速度，以下为巧用Python标准库heapq的解题代码

```python

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        heapq._heapify_max(nums)
        self.heap = []
        self.k = k

        for num in nums:
            if self.heap.__len__() < self.k:
                heapq.heappush(self.heap,num)
            else:
                if num>self.heap[0]:
                    heapq.heappop(self.heap)
                    heapq.heappush(self.heap,num)


    def add(self, val: int) -> int:
        
        if self.heap.__len__() < self.k:
            heapq.heappush(self.heap,val)
            if self.heap.__len__() < self.k:
                return None
            return self.heap[0]
        else:
            if val>self.heap[0]:
                heapq.heappop(self.heap)
                heapq.heappush(self.heap,val)
            return self.heap[0]
```

从下图看出相比暴力解法，基于最小堆的算法时间复杂程度大大减小。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210705114930.png)

### 题目改编

可以思考以下如果此题改成了求第K小，此题就需要用到最大堆，heapq中没有直接实现部分API，需要自己实现。