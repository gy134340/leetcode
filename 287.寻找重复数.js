/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const map = new Map()

  for (let item of nums) {
    if (map.has(item)) {
      return item
    } else {
      map.set(item, true)
    }
  }

};
// @lc code=end

