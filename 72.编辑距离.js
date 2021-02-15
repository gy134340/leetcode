/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const len1 = word1.length
  const len2 = word2.length

  let dp = new Array(len1 + 1).fill(null).map(() => {
    return new Array(len2 + 1).fill(0)
  })
  // dp[i][j ] 将 word1 i 转换成 word2 j所使用的最少操作数

  dp[0][0] = 0

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j
  }

  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i
  }


  for (let i = 1; i <= len1; i++) {
    const curI = word1[i - 1]

    for (let j = 1; j <= len2; j++) {
      const curJ = word2[j - 1]
      let isSame = curJ ===  curI
      dp[i][j] = isSame ? 
        dp[i-1][j - 1] :
        Math.min(dp[i-1][j - 1] + 1, dp[i][j - 1] + 1, dp[i -1][j] + 1)
    }
  }

  console.log('🐞-dp', dp)

  return dp[len1][len2]


};
// @lc code=end

