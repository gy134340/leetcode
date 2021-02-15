/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}
  let max = 0
  let maxValue

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
  }

  for (let key in map) {
    if (map[key] >= max) {
      max = map[key]
      maxValue = key
    }
  }

  return maxValue
};
// @lc code=end

