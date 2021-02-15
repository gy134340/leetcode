/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [0];
  for (let i = 1; i <= num; i++) {
    result.push(result[i >> 1] + (i & 1));
  }
  return result
};
// @lc code=end

