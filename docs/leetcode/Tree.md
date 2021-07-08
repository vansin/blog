# Tree


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210708072300.png)


- Link List是特殊化的Tree
- Tree是特殊化的graph

## 树的遍历

### Pre-order

根-左-右

### In-order

左-根-右

### Post-order

左-右-根

### 层次遍历




## 二叉搜索树（Binary Search Tree）

- 平衡二叉树
- 红黑树


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210708072736.png)

- 左子树上所有的值均小于它的根节点的值
- 



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210708072908.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210708073129.png)

https://www.bigocheatsheet.com/


- B-Tree
- Red-Black Tree
- Splay Tree
- AVL Tree
- KD Tree


## [【LeetCode】98. Validate Binary Search Tree](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/98-validate-binary-search-tree-by-lphslujkxd/)


### 简要题目

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

### 中序遍历

```python 

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:

        arrary_list = []

        def in_order(node: TreeNode):

            if node == None:
                return

            in_order(node.left)
            arrary_list.append(node.val)
            in_order(node.right)

        in_order(root)

        # print(arrary_list)

        for i in range(arrary_list.__len__()-1):

            if arrary_list[i]>=arrary_list[i+1]:
                return False

        return True

```

### 递归方法





## [【LeetCode】236. Lowest Common Ancestor of a Binary Tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)


```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        if root is None or root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left,p,q)
        right = self.lowestCommonAncestor(root.right,p,q)

        if left == None:
            return right
        elif right is None:
            return left
        else:
            return root

```




## [【LeetCode】235.Lowest Common Ancestor of a Binary Search Tree](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

### 递归方法


```python
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':


        if p.val < root.val > q.val:

            return self.lowestCommonAncestor(root.left, p ,q)
        
        if p.val > root.val < q.val:
            return self.lowestCommonAncestor(root.right,p,q)

        return root
```


### 非递归方法


```python 

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        while root:

            if p.val < root.val > q.val:
                root = root.left

            elif p.val > root.val < q.val:

                root = root.right

            else:

                return root
```