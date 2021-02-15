/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!coins.length) {
    return -1
  }

  if (amount === 0) {
    return 0
  }

  let dp = new Array(amount+1).fill(amount + 1)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let item of coins) {
      if (i - item >= 0) {
        dp[i] = Math.min(dp[i], dp[i - item] + 1)
      }
    }
  }


  return dp[amount] > amount ? -1 : dp[amount]
};
// @lc code=end

