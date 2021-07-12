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


## [4.【LeetCode】51. N-Queens](https://leetcode-cn.com/problems/n-queens/)

```python 
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:

        if n<1: return []
        self.result = []
        self.cols = set(); self.pie = set(); self.na = set()
        self.DFS(n, 0, [])
        return self._generate_result(n)


    def DFS(self, n, row, cur_state):

        if row>=n:
            self.result.append(cur_state)
            return

        for col in range(n):

            if col in self.cols or row+col in self.pie or row-col in self.na:

                continue
            
            self.cols.add(col)
            self.pie.add(row+col)
            self.na.add(row-col)

            self.DFS(n, row+1, cur_state+[col])

            self.cols.remove(col)
            self.pie.remove(row+col)
            self.na.remove(row-col)

    def _generate_result(self, n):

        return [["."*i+"Q" + "."*(n-i-1) for i in sol] for sol in self.result]
```

## [5.【LeetCode】52. N-Queens II](https://leetcode-cn.com/problems/n-queens-ii/)


```python
class Solution:
    def totalNQueens(self, n: int) -> int:


        if n<1: return 0
        self.result = []
        self.cols = set(); self.pie = set(); self.na = set()
        self.DFS(n, 0, [])
        return self._generate_result(n).__len__()


    def DFS(self, n, row, cur_state):

        if row>=n:
            self.result.append(cur_state)
            return

        for col in range(n):

            if col in self.cols or row+col in self.pie or row-col in self.na:

                continue
            
            self.cols.add(col)
            self.pie.add(row+col)
            self.na.add(row-col)

            self.DFS(n, row+1, cur_state+[col])

            self.cols.remove(col)
            self.pie.remove(row+col)
            self.na.remove(row-col)


    
    def _generate_result(self, n):

        return [["."*i+"Q" + "."*(n-i-1) for i in sol] for sol in self.result]
```



## [6.【LeetCode】36. Valid Sudoku](https://leetcode-cn.com/problems/valid-sudoku/)

```python

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        self.col = [set() for i in range(9)]
        self.row =  [set() for i in range(9)]
        self.mini =[[set() for i in range(3)] for j in range(3)]

        for i in range(9):
            for j in range(9):

                val = board[i][j]

                if val == '.':
                    continue

                mini_i = int(i/3)
                mini_j = int(j/3)

                if val in self.col[j] or val in self.row[i] or val in self.mini[mini_i][mini_j]:
                
                    return False
                else:

                    self.row[i].add(val)
                    self.col[j].add(val)
                    self.mini[mini_i][mini_j].add(val)

        return True
```


## [7.【LeetCode】37. Sudoku Solver](https://leetcode-cn.com/problems/sudoku-solver/)

```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """


        self.col = [set() for i in range(9)]
        self.row =  [set() for i in range(9)]
        self.mini =[[set() for i in range(3)] for j in range(3)]
        self.board = board


        for i in range(9):
            for j in range(9):
                val = board[i][j]
                if val == '.':
                    continue
                mini_i = int(i/3)
                mini_j = int(j/3)
                self.row[i].add(val)
                self.col[j].add(val)
                self.mini[mini_i][mini_j].add(val)



        self.ans = None
        self._DFS(0,0)
        return self.ans

    def _DFS(self,i,j):

        if (i>8):
            self.ans = copy.deepcopy(self.board)
            # print(self.ans)
            return self.ans

        mini_i = int(i/3)
        mini_j = int(j/3)

        # 
        if (j==8):
            next_i = i + 1
            next_j = 0
        else:
            next_i = i
            next_j = j+1
        

        val = self.board[i][j]

        if val == ".":
            for num in range(1,10):

                num_str = str(num)

                if num_str in self.col[j] or num_str in self.row[i] or num_str in self.mini[mini_i][mini_j]:
                    continue

                self.row[i].add(num_str)
                self.col[j].add(num_str)
                self.mini[mini_i][mini_j].add(num_str)
                self.board[i][j] = num_str

                result = self._DFS(next_i, next_j)

                if result:
                    return result
                
                self.board[i][j] = "."
                self.row[i].remove(num_str)
                self.col[j].remove(num_str)
                self.mini[mini_i][mini_j].remove(num_str)

        else:

            result = self._DFS(next_i, next_j)
            return result
```