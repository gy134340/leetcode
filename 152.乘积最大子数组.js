/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // let imin = nums[0]
  // let imax = nums[0]
  // let max = nums[0]

  // for (let i = 1; i < nums.length; i++) {
  //   let max = imax
  //   let min = imin
  //   imax = Math.max(max * nums[i], nums[i], min * nums[i])
  //   imin = Math.min(min * nums[i], nums[i], max * nums[i])
  //   max = Math.max(max, imax)
  // }

  // return max
  let ans = nums[0];
  let minValue = nums[0];
  let maxValue = nums[0];
  let minProduct = 0;
  let maxProduct = 0;
  for (let i = 1; i < nums.length; i++) {
    // 与当前最大值和最小值的乘积值此时都是未知数，也就是谁大谁小没人知道。
    minProduct = minValue * nums[i];
    maxProduct = maxValue * nums[i];
    // 此时就需要重新取最大值，最小值。
    minValue = Math.min(minProduct, maxProduct, nums[i]);
    maxValue = Math.max(minProduct, maxProduct, nums[i]);
    ans = Math.max(maxValue, ans);
  }

  return ans;

};
// @lc code=end

