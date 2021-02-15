/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true; // 空字符可以被表示。

  // 遍历字符串的所有子串，遍历开始索引 i，遍历区间 [0,n)
  // 每次的小 s
  for (let i = 1; i <= n; i++) {

    // 遍历结束索引 j，遍历区间 [i+1,n+1)
      for (let j = 0; j < i; j++) {
          if (dp[j] && wordDict.indexOf(s.substr(j, i - j)) !== -1) {
              dp[i] = true;
              break;
          }
      }
  }
  return dp[n];
};
// @lc code=end

