/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和
var subarraySum = function(nums, k) {
  const map = new Map()
  map.set(0, 1)
  let count = 0, pre = 0

  for (let item of nums) {
    pre = pre + item

    if (map.has(pre - k)) {
      count = count + map.get(pre - k)
    }

    // 存在负数
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1)
    } else {
      map.set(pre, 1)
    }
    
  }

  return count
};
// @lc code=end

