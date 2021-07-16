# Dynamic Programming

> 动态规划 == 动态递推

自底向上

- 递归+记忆化-->递推
- 状态的定义: opt[n],dp[n],fib[n]
- 状态转移方程

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210715084042.png)


## 斐波那契数列

朴素的递归时间复杂程度为o(2^n)

记忆化


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210715084702.png)

## 计算所有路径

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210715090306.png)

## PD VS 回溯 VS贪心


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210715091141.png)


## [【LeetCode】70. Climbing Stairs](https://leetcode-cn.com/problems/climbing-stairs/)


### 递归+记忆化

```python

class Solution:
    def climbStairs(self, n: int) -> int:
        self.T = dict()
        return self._DFS(n)
    
    def _DFS(self, n):

        if n<=2:
            return n
        else:
            if n-1 in self.T:
                f_1 = self.T.get(n-1)
            else:
                f_1 = self._DFS(n-1)
                self.T[n-1] = f_1
            

            if n-2 in self.T:
                f_2 = self.T.get(n-2)
            else:
                f_2 = self._DFS(n-2)
                self.T[n-2] = f_2

            return f_1 + f_2

```

### 递推(动态规划)


```python

O(N)

class Solution:
    def climbStairs(self, n: int) -> int:

        L_1 = 2
        L_2 = 1

        if n<=2:
            return n

        for i in range(2,n):

            L = L_1 + L_2
            L_2,L_1 = L_1, L

        return L_1

```

### 矩阵快速幂

O(logN)


## [【LeetCode】120. Triangle](https://leetcode-cn.com/problems/triangle/solution/120-by-animalcoder/)

### 动态规划

```python 
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:

        triangle_len = triangle.__len__()

        DP = [[10001 for i in range(triangle_len)] for j in range(triangle_len)]

        for i in range(triangle_len):
            for j in range(i+1):

                DP[i][j] = triangle[i][j]

        # print(DP)

        for i in range(triangle_len).__reversed__():
            for j in range(i):
                x,y = i-1,j
                DP[x][y] = triangle[x][y] + min(DP[x+1][y],DP[x+1][y+1])

        return DP[0][0]
```



## [【LeetCode】152. Maximum Product Subarray](https://leetcode-cn.com/problems/maximum-product-subarray/)


### 暴力方法


### 动态规划

- 状态的定义
- DP方程


```python 
class Solution:
    def maxProduct(self, nums: List[int]) -> int:

        if nums is None: return 0

        dp = [[0 for _ in range(2)] for _ in range(2)]

        dp[0][1], dp[0][0], res = nums[0], nums[0], nums[0]

        for i in range(1, len(nums)):

            x,y = i % 2, (i-1)%2
            dp[x][0] = max(dp[y][0]*nums[i],dp[y][1]*nums[i],nums[i])
            dp[x][1] = min(dp[y][0]*nums[i],dp[y][1]*nums[i],nums[i])

            res = max(res,dp[x][0])

        return res
```


## [【LeetCode】121. Best Time to Buy and Sell Stock](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

只能买卖一次

```python 
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_num = prices[0]
        max = 0
        for i in range(1,prices.__len__()):
            if prices[i]-min_num>max:
                max = prices[i]-min_num
            if min_num>prices[i]:
                min_num = prices[i]
        return max
```

## [【LeetCode】122. Best Time to Buy and Sell Stock II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/)

股票能交易无数次

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = prices.__len__()
        ans = 0
        for i in range(1,n):
            if prices[i]-prices[i-1]>0:
                ans+=(prices[i]-prices[i-1])
        return ans
```


## [【LeetCode】123. Best Time to Buy and Sell Stock III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)

两次

```python 
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        k = min(2, len(prices) // 2)

        buy = [-float("inf")] * (k+1)
        sell = [0] * (k+1)

        for p in prices:
            for i in range(1, k+1):
                buy[i] = max(buy[i], sell[i-1] - p)
                sell[i] = max(sell[i], buy[i] + p)
        return sell[-1]
```

## [【LeetCode】309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

需要隔一天才能买

```python

class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        buy, sell_pre, sell = -float("inf"),0,0

        for p in prices:
            buy = max(buy, sell_pre-p)
            sell_pre, sell = sell, max(sell, buy+p)

        return sell
```



## [【LeetCode】188. Best Time to Buy and Sell Stock IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/solution/188-best-time-to-buy-and-sell-stock-iv-ti-jie-by-l/)

k次交易

```python
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        k = min(k, len(prices) // 2)

        buy = [-float("inf")] * (k+1)
        sell = [0] * (k+1)

        for p in prices:
            for i in range(1, k+1):
                buy[i] = max(buy[i], sell[i-1] - p)
                sell[i] = max(sell[i], buy[i] + p)

        return sell[-1]
```

## 714[【LeetCode】714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/comments/)

交易手续费

```python
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        buy, sell = -float("inf"),0
        for p in prices:
            buy = max(buy, sell-p-fee)
            sell = max(sell, buy+p)
        return sell
```