/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  const checkMax = () => {
    if (height.length < 2) {
      return 0
    }
    let max = 0
    for (let i = 0; i < height.length; i++) {
      let store = i * Math.min(height[i], height[0])
      max = Math.max(max, store)
    }
    height = height.splice(1)

    return Math.max(max, checkMax())
  }

  return checkMax()

};
// @lc code=end

