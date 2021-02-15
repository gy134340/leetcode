/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

  const len = nums.length
  let i = 0, j = len - 1
  let res = 0

  const next = nums.slice(0).sort((a, b) => a - b)

  while (i < j) {
    if (next[i] === nums[i]) {
      i++
    } else if  (next[j] === nums[j]) {
      j--
    } else {
      break
    }
  }


  if (i < j) {
    console.log('🐞-nums', nums.slice(i, j + 1))
    res = nums.slice(i, j + 1)
  }

  return res.length || 0
};
// @lc code=end

