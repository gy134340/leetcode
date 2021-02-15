/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  // if (n === 0) {

  // }
  let dp = []
  dp[0] = 0
  dp[1] = 1

  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1

    for (let j = 1; i - j * j >= 0; j++) { 
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }
  return dp[n]
};
// @lc code=end

