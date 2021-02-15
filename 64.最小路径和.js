/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // let min = 0
  let m = grid.length
  let n = grid[0].length

  // dp 代表走到当前节点的最小值
  let dp = new Array(m).fill(null).map(() => {
    return new Array(n).fill(null)
  })


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j]
        continue
      }
      if (i === 0) {
        dp[i][j] = dp[i][j-1] + grid[i][j]
      } else if (j === 0) {
        dp[i][j] = dp[i-1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
      }
    }
  }

  return dp[m-1][n-1]
};
// @lc code=end

