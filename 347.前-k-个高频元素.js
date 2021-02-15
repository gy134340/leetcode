/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let result = []

  let map = new Map()
  for (let item of nums) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  }
  result = Array.from(map)
  result = result.sort((a, b) => b[1] - a[1])
  return result.slice(0, k).map(item => {
    return item[0]
  })

};
// @lc code=end

