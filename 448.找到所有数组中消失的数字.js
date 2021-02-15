/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  if (!nums) {
    return []
  }
  const len = nums.length
  const result = []
  for (let i = 1; i <= len; i++) {
    if (nums.indexOf(i) < 0) {
      result.push(i)
    }
  }
  return result
};
// @lc code=end

