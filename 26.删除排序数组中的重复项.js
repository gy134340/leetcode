/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
    }
  }

  return nums.length

};
// @lc code=end

