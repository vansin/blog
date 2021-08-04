# 背包问题



## 有多少种背包方法(顺序相关)

#### [377. Combination Sum IV](https://leetcode-cn.com/problems/combination-sum-iv/)

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.

```shell
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

此题的关键是不同顺序的序列算不同计数

```python 
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:

        DP = [0] * (target+1)

        DP[0] = 1

        for i in range(1,target+1):
            for num in nums:
                if i-num>=0:
                    DP[i] = DP[i] + DP[i-num]

        return DP[target]
```

#### [70. Climbing Stairs](https://leetcode-cn.com/problems/climbing-stairs/)

## 有多少个背包方法(顺序无关)

#### [518. Coin Change 2](https://leetcode-cn.com/problems/coin-change-2/)



## 最少需要多少个

#### [279. Perfect Squares](https://leetcode-cn.com/problems/perfect-squares/)

#### [322. Coin Change](https://leetcode-cn.com/problems/coin-change/)

#### [55. Jump Game](https://leetcode-cn.com/problems/jump-game/)

#### [45. Jump Game II](https://leetcode-cn.com/problems/jump-game-ii/)

