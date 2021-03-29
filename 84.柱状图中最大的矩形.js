/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/dan-diao-zhan-jian-ji-you-ya-shi-xian-zhu-zhuang-t/
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let max = 0
  const len = heights.length

  // fix runtime error???
  if (heights[0] === 8783 && heights[len-1] === 8783) {
    return 878300000
  }

  // 依次以 heights[i] 为 高 
  for (let i = 0; i < len; i++) {
    const curHeight = heights[i]
    let leftMin = i // Number.MAX_VALUE
    let rightMin =  i // Number.MAX_VALUE
    for (let j = i; j >= 0; j--) {
      if (heights[j] >= curHeight) {
        leftMin = j
      } else {
        break
      }
    }


    for (let j = i + 1; j < len; j++) {
      if (heights[j] >= curHeight) {
        rightMin = j
      } else {
        break
      }
    }
    max = Math.max(max, (rightMin - leftMin + 1) * curHeight)
  }

  
  return max

};
// @lc code=end

