/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  const result = []

  const backTrack = (pre, candidates) => {
    const sum = pre.reduce((a, b) => a + b, 0)
    if (sum >= target) {
      if (sum === target) {
        pre = pre.sort((a, b) => a - b)
        const isIn = result.find(item => {
          return item.toString() === pre.toString()
        })
        if (!isIn) {
          result.push(pre)
        }
      }
      return
    }

    for (let i = 0; i < candidates.length; i++) {
      backTrack([...pre, candidates[i]], candidates)
    }
  }

  backTrack([], candidates)

  return result
};
// @lc code=end

