/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0
  }
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  // dp[i - 2] 的最后一个数一定是被偷的，不然直接连 i - 1 也可以加上
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }

  return dp[nums.length - 1]
};
// @lc code=end

