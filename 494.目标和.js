/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// https://github.com/sl1673495/leetcode-javascript/issues/87
var findTargetSumWays = function(nums, S) {
  let len = nums.length
  if (!len) {
    return 0
  }
  let min = nums.reduce((sum, cur) => sum - cur, 0)
  let max = nums.reduce((sum, cur) => sum + cur, 0)

  let dp = []
  for (let n = 0; n < len; n++) {
    dp[n] = []
  }

  // 基础状态
  for (let s = min; s <= max; s++) {
    let num = nums[0]
    let pickPositive = s === num ? 1 : 0
    // 选负数形态
    let pickNegative = -s === num ? 1 : 0
    dp[0][s] = pickPositive + pickNegative
  }

  for (let n = 1; n < len; n++) {
    for (let s = min; s <= max; s++) {
      let num = nums[n]

      // 前 6 能组成 10 = 前 5 能组成5 || 前 5能组成 15s
      // 选正数形态
      let pickPositive = dp[n - 1][s - num] || 0
      // 选负数形态
      let pickNegative = dp[n - 1][s + num] || 0
      dp[n][s] = pickNegative + pickPositive
    }
  }
  return dp[len - 1][S] || 0
};
// @lc code=end

