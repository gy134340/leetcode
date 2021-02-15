/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
let cache = {}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  let left = 0
  let right = 0

  if (n >= 2) {
    left = cache[n-1] ? cache[n-1] : climbStairs(n - 1)
    right = cache[n-2] ? cache[n-2] : climbStairs(n - 2)
    cache[n-1] = left
    cache[n-2] = right
  } else {
    return 1
  }

  return left + right
};
// @lc code=end

