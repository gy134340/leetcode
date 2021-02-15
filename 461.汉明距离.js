/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const res = x ^ y
  return Number(res).toString(2).split('').filter(item => Number(item) === 1).length
};
// @lc code=end

