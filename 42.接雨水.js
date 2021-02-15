/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// https://mp.weixin.qq.com/s/f9ebzbwymR8jQeUDxjeCDA
// 1. 该单位储水量
// 2. 该柱子的左右两侧最大高度的较小者减去此柱子的高度
var trap = function(height) {

  let res = 0;

  for (let i = 0; i < height.length; i++) {
    const cur = height[i]
    let leftMax = 0, rightMax = 0

    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(height[j], leftMax)
    }

    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(height[j], rightMax)
    }

    res = res + Math.min(rightMax, leftMax) - cur
  }
  return res
};
// @lc code=end

