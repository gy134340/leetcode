/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

  // 从小到大排序
  const sortedArr = intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  const result = []
  for (let i = 0; i < sortedArr.length; i++) {
    const cur = sortedArr[i]
    const last = result[result.length - 1]
    if (last && cur[0] <= last[1]) {
      last[1] = Math.max(cur[1], last[1])
    } else {
      result.push(cur)
    }
  }

  return result

};
// @lc code=end

