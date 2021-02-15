/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if (!s.length) {
    return 0
  }

  const len = s.length

  let dp = new Array(len).fill(null).map((item) => {
    return new Array(len).fill(null)
  })

  let res = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {

      // 比如 aa，也是一个回文串 i - j < 2
      if (s.charAt(i) === s.charAt(j) && (i - j <= 1 || dp[j + 1][i - 1])) {
        dp[j][i] = true;
        res++;
      }
    }
   
  }

  return res

};
// @lc code=end

