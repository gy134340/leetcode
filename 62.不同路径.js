/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let cache = {}

  const getMax = (i, j) => {
    const key = `${i}-${j}`
    let rightMax = 0
    let bottomMax = 0

    if (cache[key]) {
      return cache[key]
    }

    if (i + 1 === m && j + 1 === n) {
      return 1
    }

    if (i < m) {
      rightMax = getMax(i + 1, j)
    } 
    if (j < n) {
      bottomMax = getMax(i, j + 1)
    }
    cache[key] = rightMax + bottomMax
    return cache[key]
  }

  return getMax(0, 0)

};
// @lc code=end

