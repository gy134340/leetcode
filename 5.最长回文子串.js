/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  

  const isPalindrome = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      if (arr[i] !== arr[j]) {
        return false
      }
    }
    return true
  }

  const checkMax = (s) => {
    let max = []
    let pre = []
    if (!s) {
      return max
    }

    for (let i = 0; i < s.length; i++) {
      pre.push(s.charAt(i))
      if (isPalindrome(pre)) {
        max = max.length > pre.length ? max : pre.slice(0)
      }
    }

    const sub = checkMax(s.substring(1))
  
    return max.length > sub.length ? max : sub
  }

  return checkMax(s).join('')
  
};
// @lc code=end

