/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let index = -1

  while(index < nums.length) {
    if (nums[index] === target) {
      return index
    }
    index++
  }
  return -1
};
// @lc code=end

