/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  let answer = []
  let len = nums.length
  let left = []
  let right = []

  left[0] = 1
  for (let i = 1; i < len; i++) {
    left[i] = nums[i-1] * left[i-1]
  }

  right[len - 1] = 1
  for (j = len - 2; j >= 0; j--) {
    right[j] = nums[j+1] * right[j+1]
  }

  for (let i = 0; i < len; i++) {
    answer[i] = left[i] * right[i]
  }

  return answer
};
// @lc code=end

