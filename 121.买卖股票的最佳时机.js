/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // let max = 0
  // const len = prices.length

  // for (let i = 0; i < len; i++) {
  //   let tmp = prices[i]
  //   for (let j = i + 1; j < len; j++) {
  //     tmp = Math.max(prices[j], tmp)
  //   }

  //   max = Math.max(tmp - prices[i], max)
  // }
  // return max >= 0 ? max : 0

  // 在更新当前这一天之前股票价格的最低点
  // 那只要最低点不是在今天，那我就可以计算一下今天卖出去能挣多少，然后跟最大利润比一下就好
  // left 只会越来越小， 之后的 max 减的值只会越来越大
  let minPrice = Number.MAX_VALUE
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }
  return maxProfit

};
// @lc code=end

