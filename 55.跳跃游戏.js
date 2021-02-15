/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // if (nums[0] === 0) {
  //   return false
  // }

  const len = nums.length

  let rightmost = 0;
  for (let i = 0; i < len; i++) {
    if (i <= rightmost) { // rightmost 都到不了当前的节点

      // i 可以表示已经走了的距离，不然还要重新计算
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= len - 1) {
        return true;
      }
    }
  }

  return false

};
// @lc code=end

