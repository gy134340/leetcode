/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

  // const swap = (arr, i, j) => {
  //   let tmp = arr[i]
  //   arr[i] = tmp
  //   tmp = arr[j]
  // }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
      }
    }
  }

  return nums
};
// @lc code=end

