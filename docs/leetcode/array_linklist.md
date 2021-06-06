# 数组和链表

## 理论

### Array

- Access: O(1)
- Insert: 平均O(n)
- Delete: 平均O(n)

### Linked List

地址和值

- Insert O(1)
- Delete O(1)

## 例题 


### [reverse-linked-list](https://leetcode-cn.com/problems/reverse-linked-list/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

Python赋值比较特立独行

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

```

### [swap-nodes-in-pairs](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)


自行实现

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let p1;
    pre = new ListNode(0, head);
    p1 = pre

    while (p1) {
        
        let p2,p3,p4;

        p2 = p1.next;
        if (p2 === null ){
            break;
        }

        p3 = p2.next;
        if (p3 === null) {
            break;
        }

        p4 = p3.next;

        p3.next = p2;
        p2.next = p4;
        p1.next = p3;
        p1 = p2;
    }

    return pre.next
};
```

解法一

```python
// self谜之写法
class Solution:
    def swapPairs(self, head):
        pre, pre.next = self, head
        while pre.next and pre.next.next:
            a = pre.next
            b = a.next
            pre.next, b.next, a.next = b, a, b.next
            pre = a

        return self.next
```

解法二 等价写法

```python
class Solution:
    def swapPairs(self, head):
        pre, pre.next = ListNode, head
        preHead = pre
        while pre.next and pre.next.next:
            a = pre.next
            b = a.next
            pre.next, b.next, a.next = b, a, b.next
            pre = a            
        return preHead.next
```


### [linked-list-cycle](https://leetcode-cn.com/problems/linked-list-cycle/)

- 限时法
- 集合法
- 快慢指针法


```js

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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

### [linked-list-cycle-ii](https://leetcode-cn.com/problems/linked-list-cycle-ii/)



### [reverse-nodes-in-k-group](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
