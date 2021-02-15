/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//  dp[i] 代表左起点+右起点 count => ()()
// https://leetcode-cn.com/problems/longest-valid-parentheses/solution/shou-hua-tu-jie-zhan-de-xiang-xi-si-lu-by-hyj8/
var longestValidParentheses = function(s) {
  let maxLen = 0;
  const len = s.length;
  const dp = new Array(len).fill(0);

  for (let i = 1; i < len; i++) {

    //  == '(' 直接为 0
    if (s[i] == ')') {

      // s[i-1]是'('，s[i-1]和s[i]组成一对
      if (s[i - 1] == '(') {
        dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2;

      // 跨过这个长度（具体细节不用管，总之它最大能提供dp[i-1]长度）
      // 来看s[i-dp[i-1]-1]这个字符
      // etc: s = "()(()())"
      } else if (s[i - 1 - dp[i - 1]] == '(') {
        if (i - 1 - dp[i - 1] - 1 >= 0) {
          // 可能存在多个
          dp[i] = dp[i - 1] + 2 + dp[i - 1 - dp[i - 1] - 1];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
};
// @lc code=end

