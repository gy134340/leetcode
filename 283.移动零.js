/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (nums[i] === 0 ) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }

  return nums
};
// @lc code=end

