/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  let row = matrix.length - 1 
  let col = matrix[0].length

  let i = 0
  while (row >= 0 && i < col) {
    if (matrix[row][i] > target) {
      row--
    } else if (matrix[row][i] < target) {
      i++
    } else {
      return true
    }
  }

  return false
};
// @lc code=end

