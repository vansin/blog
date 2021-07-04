# queue stack

栈和队列的题目，除了会做，还要求熟练度。争取此类题目10min之内能够做出来

## Theory

### stack
  
First in Last Out


### Queue

First In First Out

### heap


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704134652.png)

## [Valid Parentheses](https://leetcode-cn.com/problems/valid-parentheses/)

### 题目简述

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### 思路

左括号进栈，又括号出栈

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ParenthesesMap = new Map()
    ParenthesesMap['{'] = '}'
    ParenthesesMap['['] = ']'
    ParenthesesMap['('] = ')'

    let stack = new Array()
    sArray = Array.from(s)
    for (let char of sArray) {
        if (char in ParenthesesMap){
            stack.push(char)
            continue
        }
        if (stack.length<1) {
            return false
        }
        let popChar = stack.pop()
        if (ParenthesesMap[popChar]!==char) {
            return false
        } 
    }

    if (stack.length === 0) {
        return true
    }
    return false
};
```


## [implement-stack-using-queues](https://leetcode-cn.com/problems/implement-stack-using-queues/)

### 简要题目
Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

Implement the MyStack class:

- void push(int x) Pushes element x to the top of the stack.
- int pop() Removes the element on the top of the stack and returns it.
- int top() Returns the element on the top of the stack.
- boolean empty() Returns true if the stack is empty, false otherwise.

Notes:

You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.

### 解题

```js
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.Queue = new Array()
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.Queue.unshift(x)
    for (let i=0;i<this.Queue.length-1; i++) {
        let tmp = this.Queue.shift()
        this.Queue.unshift(tmp)
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.Queue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.Queue[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.Queue.length === 0) {
        return true
    } else {
        return false
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

## [implement-queue-using-stacks](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

### 简要题目

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

- void push(int x) Pushes element x to the back of the queue.
- int pop() Removes the element from the front of the queue and returns it.
- int peek() Returns the element at the front of the queue.
- boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

- You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


### 解题

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704152331.png)

双栈实现一个队列

- inStack 和 outStack
- push：在inStack中push实现


```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = new Array()
    this.outStack = new Array()
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length>0) {
        return this.outStack.pop()
    }

    while (this.inStack.length>0) {
        this.outStack.push(this.inStack.pop())
    }
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    
    if (this.outStack.length>0) {
        let tmp = this.outStack.pop()
        this.outStack.push(tmp)
        return tmp
    }

    while (this.inStack.length>0) {
        this.outStack.push(this.inStack.pop())
    }
    
    let tmp = this.outStack.pop()
    this.outStack.push(tmp)
    return tmp
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.inStack.length === 0 && this.outStack.length === 0) {
        return true
    } else {
        return false
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
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

## [sliding-window-maximum](https://leetcode-cn.com/problems/sliding-window-maximum/)