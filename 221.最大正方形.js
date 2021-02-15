/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const iLen = matrix.length
  const jLen = matrix[0].length
  let max = 0

  if (!matrix || !iLen || !jLen) {
    return max
  }

  const dp = new Array(iLen).fill(null).map(() => {
    return new Array(jLen).fill(0)
  })
 

  for (let i = 0; i < iLen; i++) {
    for (let j = 0; j < jLen; j++) {
      const cur = Number(matrix[i][j])
      if (cur === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = Number(cur)
        } else {

          // 动态转移方程
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        max = Math.max(dp[i][j], max)
      }
    }
  }

  return max * max

};
// @lc code=end

