/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */


// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length
  const res = []
  for (let i = 0; i < len; i++) {
    const cur = T[i]
    let nextBiggerIndex = 0
    for (let j = i; j < len; j++) {
      if (T[j] > cur) {
        nextBiggerIndex = j - i
        break
      }
    }
    res.push(nextBiggerIndex)
  }

  return res
};
// @lc code=end

