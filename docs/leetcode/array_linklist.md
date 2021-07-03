# 数组和链表类题目（1）

数组和链表是其他树和图等高级数据结构的底层数据结构，本文来总结一下数组和链表刷题的基本套路。

在内存上时连续存储的，方便索引直接访问，不方便增删

- Access: O(1)
- Insert: 平均O(n)
- Delete: 平均O(n)

链表所存储的数据在内存中是分散的，需要额外的存储空间存储下一个节点的地址，插入删除效率较高，无法通过一个索引算出对应元素的地址。

- Insert O(1)
- Delete O(1)

涉及到链表的题目，先在纸上画出步骤，然后在动手写代码

## [reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list/)

Given the head of a singly linked list, reverse the list, and return the reversed list.

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703094523.png)

### 迭代法

```js
var reverseList = function(head) {
    
    let pre = null;
    let cur = head;
    while (cur) {
        // 接龙赋值，被存储的值的指针会被立即赋值
        const next = cur.next;
        // 反转核心操作
        cur.next = pre; 
        pre = cur;
        // 遍历骨架
        cur = next;
    }
    return pre
};

```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
<p align="center">代码对应迭代图</p>

<!-- Python赋值比较特立独行

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:

        cur, pre = head, None
        while cur:
            cur.next, pre, cur = pre, cur, cur.next
        return pre

``` -->

### 递归反转法


```js
var reverseList = function(head) {
    if(head==null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
};

```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/reverse1.png)

<!-- [原图链接](https://www.processon.com/embed/60e00de7e401fd7e342c8ba8) -->

## [swap-nodes-in-pairs](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)



Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703153245.png)

### 迭代法
```js
var swapPairs = function(head) {
    let preHead = Object()
    preHead.next = head;
    cur = preHead;
    while(cur.next && cur.next.next){
        p1 = cur.next;
        p2 = cur.next.next;

        let p3 = p2.next;

        cur.next = p2;
        p2.next = p1;
        p1.next = p3;

        cur = cur.next.next
    }
    return preHead.next
};
```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703160940.png)

使用this代替preHead
```js
var swapPairs = function(head) {
    this.next = head;
    cur = this;
    while(cur.next && cur.next.next){
        p1 = cur.next;
        p2 = cur.next.next;

        let p3 = p2.next;

        cur.next = p2;
        p2.next = p1;
        p1.next = p3;

        cur = cur.next.next
    }
    return this.next
};
```

### 递归方法

```js
var swapPairs = function(head) {
    if (!(head && head.next)){
        return head
    }
    let tmp = head.next;
    head.next = swapPairs(tmp.next)
    tmp.next = head;
    return tmp;
};

```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703163757.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703163829.png)

## [linked-list-cycle](https://leetcode-cn.com/problems/linked-list-cycle/)

### 限时法

一秒中内如果没有走到null，则说明有环，暂不实现

### 集合法

使用set(),把遍历的节点加入set()，如果发现先前已存在则说明存在环

### 快慢指针法


```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let p1 = head;
    let p2 = head;
    // 优雅的不引入异常
    while (p1 && p2 && p2.next){
        p1 = p1.next;
        p2 = p2.next.next;

        if (p1 === p2) {
            return true
        }
    }
    return false
};

```

## [linked-list-cycle-ii](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.


### 集合法

本题快慢指针失效了，需要使用集合法


```js
var detectCycle = function(head) {

    let nodeSet = new Set()

    let p1 = head;

    while (p1 && p1.next) {
        if(nodeSet.has(p1)) {
            return p1;
        }
        nodeSet.add(p1)
        p1 = p1.next
    }
    return null
};
```


## [reverse-nodes-in-k-group](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)


### 题目简述

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703164835.png)

```shell
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210703164919.png)

```shell
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

### 递归方法


做了三个小时，虽然做出来了， 不合格

```js
var reverseKGroup = function(head, k) {

    if (k===1) {
        return head
    }

    var reverseKGroupSingle = function(head,k,deep) {
        let newHead = {
            lastGroupHead: null,
            nowGroupHead: null,
            isNeedReverse: true
        }

        if (head == null || head.next == null) {
            if(deep % k === 0) {
                newHead.lastGroupHead = null
                newHead.nowGroupHead = head
                newHead.isNeedReverse = true
                return newHead;
            }
            if(deep % k === 1) {
                newHead.lastGroupHead = head
                newHead.isNeedReverse = true
                return newHead;
            }

            newHead.isNeedReverse = false
            newHead.lastGroupHead = null
            newHead.nowGroupHead = null

            return newHead

        }

        newHead = reverseKGroupSingle(head.next ,k ,deep+1)
        let isNeedReverse = newHead.isNeedReverse

        // 递归到新组
        if(deep % k === 0) {
            head.next = null
            newHead.nowGroupHead = head
            return newHead

        } 

        // 最后一个递归
        if (deep % k === 1) {
            
            if (isNeedReverse) {
                head.next.next = head;
                let tmp = head.next 
                head.next = newHead.lastGroupHead
                newHead.lastGroupHead = newHead.nowGroupHead
                return newHead
            } else {
                newHead.lastGroupHead = head
                newHead.isNeedReverse = true
                return newHead
            }

        }

        if (isNeedReverse) {
            head.next.next = head;
            head.next = null
            return newHead
        } else {
            return newHead
        }
        
    } 
    return reverseKGroupSingle(head,k,1).nowGroupHead
};
```
### 迭代方法

后续实现