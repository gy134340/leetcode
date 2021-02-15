/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return []
  }

  let map = {'2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']}

  const result = []

  const dfs = (str, index) => {
    if (index === digits.length) {
      result.push(str)
      return
    }
    
    for (let item of map[digits.charAt(index)]) { // 只是遍历单个字母
      dfs(str + item, index + 1)
    }
  }

  dfs('', 0)

  return result
};
// @lc code=end

