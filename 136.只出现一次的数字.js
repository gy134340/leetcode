/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const sm = new Map()

  for (let item of nums) {
    sm.set(item, sm.has(item) ? (sm.get(item) + 1) : 1)
  }
  for (let [key, value] of sm) {
    if (value === 1) {
      return key
    }
  }

};
// @lc code=end

