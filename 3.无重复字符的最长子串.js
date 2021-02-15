/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0
  }

  let arr = [], max = 0
  for(let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if(index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i))
    max = Math.max(arr.length, max) 
  }
  return max

  // let map = new Map()
  // let max = 0
  // let index = 0 // 使用 i 来标记无重复子串开始下q标
  // for (let j = 0; j < s.length; j++) {
  //   if(map.has(s[j])) {
  //     index = Math.max(map.get(s[j]) + 1, index)
  //     index = map.get(s[j]) + 1
  //   }
  //   max = Math.max(max, j - index + 1)

  //   map.set(s[j], j)
  // }
  // return max

};
// @lc code=end

