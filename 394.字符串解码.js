/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */


// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

  const decode = (str) => {
    if (!str) {
      return ''
    }

    const len = str.length
    let pre = ''
    for (let i = 0; i < len; i++) {

      // 是数字 
      let count = ''
      while (!isNaN(str.charAt(i))) {
        count = count.concat(str.charAt(i))
        i++
      }

      count = Number(count)
      // & 下一位是 开口
      if (count > 0 && str.charAt(i) === '[') {

        
        let start = 1
        let j = i + 1
        
        // 找到下一个闭口
        while (j < len) {
          j++
          if (str.charAt(j) === '[') {
            start++
          }
          if (str.charAt(j) === ']') {
            start--
          }

          if (start === 0) {
            break
          }
        }
        // 去掉左右括号
        let subString = str.substring(i + 1, j)
        i = j
        const cur = new Array(count).fill(null).map(() => {
          return decode(subString)
        }).join('')
        pre = pre.concat(cur)
      } else {
        pre = pre.concat(str.charAt(i))
      }
    }
    return pre
  }
  return decode(s)
};
// @lc code=end

