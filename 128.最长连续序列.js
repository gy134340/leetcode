/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  if (!nums.length) {
    return 0
  }
  
  const quickSort = (arr) => {
    if (!arr || !arr.length) {
      return []
    }

    const pivot = arr.length >> 1
    const cur = arr[pivot]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (i !== pivot) {
        if (item < cur) {
          left.push(item)
        } else if (item > cur){
          right.push(item)
        }
      }
    }
    
    return [...quickSort(left), cur, ...quickSort(right)]
  }
  const res = quickSort(nums)
  console.log('🐞-res', res)
  let max = 1
  let count = 1
  const len = res.length
  for (let i = 0; i < len; i++) {
    if (i >= 1) {
      if (res[i] - res[i - 1] === 1) {
        count++
        max = Math.max(max, count)
      } else {
        count = 1
      }
    }
  }

  return max

};
// @lc code=end

