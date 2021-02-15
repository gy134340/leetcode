/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) {
    return 0
  }


  let dp = []
  dp[0] = 1
  const len = nums.length
  let max = 1

  for (let i = 1; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      // 新增数为 nums[i] 
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }

  return max

};
// @lc code=end

