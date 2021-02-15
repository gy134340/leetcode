/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []

  const getResult = (pre, aug) => {
    if (aug <= nums.length) {
      if (!result.find(item => item.toString() === pre.toString())) {
        result.push(pre)
      } else {
        return
      }
    } else {
      return
    }

    for (let i = 0; i < nums.length; i++) {
      const next = nums[i]
      let nextPre = pre.indexOf(next) === -1 ? pre.concat(next) : pre 
      getResult([...nextPre.sort((a, b) => a - b) ], aug + 1)
    }
  }

  getResult([], 0)

  return result
};
// @lc code=end

