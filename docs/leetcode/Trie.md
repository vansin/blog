# 字典树

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714082741.png)

## 理论部分

### Trie树的数据结构

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714083105.png)




### Trie树的核心思想

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714083527.png)

```python 
class TrieNode:

    def __init__(self):
        self.children = [None]*ALPHABET_SET
        self.isEndOFWord = False

```
### Trie树的基本性质


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210714083956.png)



## [【LeetCode】208. Implement Trie (Prefix Tree)](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)



```python

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """

        node = self.root
        for s in word:
            if s not in node.children:
                node.children[s] = TrieNode()
            node = node.children[s]

        node.isEndOFWord = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """

        node = self.root

        for s in word:
            if s not in node.children:
                return False
            else:
                node = node.children[s]

        if node.isEndOFWord == False:

            return False

        return True

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """

        node = self.root
        for s in prefix:
            if s not in node.children:
                return False
            node = node.children[s]
        return True

class TrieNode:

    def __init__(self) -> None:

        self.children = dict()
        self.isEndOFWord = False

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```


## [【LeetCode】212. Word Search II](https://leetcode-cn.com/problems/word-search-ii/)


```python

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:

        self.board = board
        self.visit = set()

        self.ans_list = set()
        self.x_len = board.__len__()
        if self.x_len == 0:
            return []
        self.y_len = board[0].__len__()
        if self.y_len == 0:
            return []

        # self.words_set = set(words)

        self.word_trie = Trie()

        for word in words:
            self.word_trie.insert(word)
        

        for x in range(self.x_len):
            for y in range(self.y_len):
                self.add_visit(x,y)
                self._DFS(x,y,self.board[x][y])
                self.remove_visit(x,y)
        return list(self.ans_list)

    def _DFS(self, x, y, word):

        if not self.word_trie.startsWith(word) or self.word_trie.deep<len(word):
            return
        elif self.word_trie.search(word):
            self.ans_list.add(word)
            self.word_trie.Delete(word)

        # if self.ans_list == self.words_set:
        #     return


        for direction_x, direction_y in [(-1,0),(1,0),(0,-1),(0,1)]:

            next_x,next_y = x + direction_x,y+direction_y
            if 0<=next_x<self.x_len and 0<=next_y<self.y_len and (not self.is_visit(next_x,next_y)):
                
                self.add_visit(next_x, next_y)
                self._DFS(next_x, next_y, word+self.board[next_x][next_y])
                self.remove_visit(next_x, next_y)

    def is_visit(self,x,y):

        if str(x)+ '-' + str(y) in self.visit:
            return True
        else:
            return False

    def add_visit(self,x,y):
         self.visit.add(str(x)+ '-' + str(y))

    
    def remove_visit(self,x,y):
         self.visit.remove(str(x)+ '-' + str(y))
  




class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TrieNode()
        self.deep = 0

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """

        if self.deep<len(word):
            self.deep = len(word)

        node = self.root
        for s in word:
            if s not in node.children:
                node.children[s] = TrieNode()
            node = node.children[s]

        node.isEndOFWord = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """

        node = self.root

        for s in word:
            if s not in node.children:
                return False
            else:
                node = node.children[s]

        if node.isEndOFWord == False:

            return False

        return True

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """

        node = self.root
        for s in prefix:
            if s not in node.children:
                return False
            node = node.children[s]
        return True

    def _DeleteDFS(self, word, node ,deep):
        if deep>=len(word):

            has_child = True
            node.isEndOFWord = False
            if not node.children:
                has_child = False
            return has_child 

        node.children[word[deep]]
        
        has_child = self._DeleteDFS(word, node.children[word[deep]], deep+1)

        if not has_child:
            node.children.pop(word[deep])
            if not node.children:
                return False
        return True 

    def Delete(self, word):
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        if self.search(word):
            self._DeleteDFS(word,self.root,0)

class TrieNode:
    def __init__(self) -> None:
        self.children = dict()
        self.isEndOFWord = False

```