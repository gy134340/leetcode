/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = []
  let map = {}

  for (let i = 0; i < strs.length; i++) {
    const item = Array.from(strs[i]).sort().join()
    if (!map[item]) {
      map[item] = [strs[i]]
    } else {
      map[item].push(strs[i])
    }
  }

  for (let key in map) {
    result.push(map[key])
  }
  return result
};
// @lc code=end

