# BFS&DFS

BFS(Breadth-First Search)
DFS(Depth-First-Search)




## BFS代码

队列的数据结构

```python

def BFS(graph, start, end):
    queue = []
    queue.append([start])
    visited.add(start)

    while queue:
        node = queue.pop()
        visited.add(node)
        process(node)
        nodes = generate_related_nodes(node)
        queue.push(nodes)
```

## DFS代码

### 递归方法

```python
visited = set()

def dfs(node, visited):

    visited.add(node)

    for next_node in node.children():
        if not next_node in visited:
            dfs(next_node, visited)

```

### 非递归方法

```python 

def DFS(self, tree):

    if tree.root is None:
        return []

    visited, stack = [], [tree.root]

    while stack:

        node = stack.pop()
        visited.add(node)

        process(node)

        nodes = generate_related_nodes(node)

        stack.push(nodes)
```


## [1.【LeetCode】102. Binary Tree Level Order Traversal](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

### BFS实现

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def levelOrder(self, root: TreeNode) -> List[List[int]]:

        if root is None:
            return []

        ans_list = []
        queue = collections.deque()
        queue.append([0,root])

        while queue:

            level, node = queue.popleft()
            
            if ans_list.__len__()>level:
                ans_list[level].append(node.val)
            else:
                ans_list.append([node.val])

            if node.left:
                queue.append([level+1, node.left])
            if node.right:
                queue.append([level+1, node.right])
            
            # print(node.val)
        return ans_list

```

### DFS实现

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def levelOrder(self, root: TreeNode) -> List[List[int]]:

        if not root: return []
        self.result = []
        self._dfs(root, 0)

        return self.result

    def _dfs(self, node, level):

        if not node: return

        if len(self.result)<level+1:
            self.result.append([])

        self.result[level].append(node.val)

        self._dfs(node.left, level+1)
        self._dfs(node.right, level+1)

```


## [2.【LeetCode】104. Maximum Depth of Binary Tree](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)


### DFS实现

```python 
class Solution:
    def maxDepth(self, root: TreeNode) -> int:

        self.max_level = 0
        self._dfs(root, 0)
        return self.max_level

    def _dfs(self, node, level):

        if node is None: return

        if self.max_level<level+1:
            self.max_level = level+1

        self._dfs(node.left, level+1)
        self._dfs(node.right, level+1)
```

### BFS实现

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        
        if root is None: return 0

        self.max_level = 0
        Q = collections.deque()
        Q.append([1,root])

        while Q:

            level, node = Q.popleft()
            if level>self.max_level:
                self.max_level = level

            if node.left:
                Q.append([level+1, node.left])
            if node.right:
                Q.append([level+1,node.right])
        
        return self.max_level
```

## [3.【LeetCode】22. Generate Parentheses](https://leetcode-cn.com/problems/generate-parentheses/)


### 数学归纳法

代码比较复杂

### DFS搜索(剪枝)

长度: 2*n


```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:

        self.list = []
        self._gen(0,0,n,"")
        return self.list


    def _gen(self, left, right, n, result):

        if left == n and right == n:
            self.list.append(result)

        if left<n:

            self._gen(left+1, right, n, result+"(")
        
        if left>right and right<n:

            self._gen(left, right+1, n, result+")")
```