/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (typeof s === 'string' && s.length === 0) {
    return true
  }

  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const arr = s.split('')
  const stack = []

  for (let i = 0; i < arr.length; i++) {
    if (stack.length && (stack[stack.length - 1] == map[arr[i]])) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }

  return stack.length === 0
};
// @lc code=end

