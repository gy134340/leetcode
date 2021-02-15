/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0
  let maxAns = nums[0]

  for (let num of nums) {
    pre = Math.max(pre + num, num)
    maxAns = Math.max(maxAns, pre)
  }
  return maxAns;

};
// @lc code=end

