/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 跟 84 题一样 https://www.cnblogs.com/dapianzi/p/12704556.html
// https://www.cnblogs.com/grandyang/p/4322667.html
var maximalRectangle = function(matrix) {
  let heights = [], max = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (heights.length == 0) {
      // init, 前后补0，使代码更简洁
      for (let k = 0; k < matrix[i].length + 2; k++) {
        heights[k] = 0;
      }
    }
    let stack = [];
    for (let j = 0; j < heights.length; j++) {
      // 同步更新每一个柱子的高度
      heights[j] = j > 0 && j <= matrix[i].length && '1' == matrix[i][j - 1] ?
       heights[j] + 1 : 
       0;
      // 计算每一个单调递增栈
      while (stack.length > 0 && heights[j] < heights[stack[stack.length - 1]]) {
        max = Math.max(max, heights[stack.pop()] * (j - stack[stack.length - 1] - 1));
      }
      stack.push(j);
    }
  }
  return max;
};

// @lc code=end

