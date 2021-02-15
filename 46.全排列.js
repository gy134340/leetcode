/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  const len = nums.length
  let origin = nums
  

  const backTrack = (pre, nums) => {
    if (pre.length === len) {
      result.push(pre)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      const item = nums[i]
      
      const preNext = [...pre, item]
      const numsNext = origin.filter(item => !preNext.includes(item))
      backTrack(preNext, numsNext)
    }

  }

  backTrack([], nums)
  return result
};
// @lc code=end

