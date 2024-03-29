/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length || prices.length === 1) {
    return 0
  }

  const len = prices.length
  let dp = new Array(len).fill(null).map(item => {
    return []
  })
  dp[0][0] = -prices[0]
  dp[0][1] =  0
  dp[0][2] = 0

  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i]) // 1.当天买入了
    dp[i][1] = dp[i-1][0] + prices[i] // 2.当天卖出了
    dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2]) // 3.当天无操作
  }

  return Math.max(dp[len - 1][1], dp[len - 1][2])
};
// @lc code=end

