/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return []
  }
  // 先排序再递归
  nums = nums.sort((a, b) => {
    return a - b
  }) // 从小到大

  const len = nums.length
  let obj = {}
  let result = []

  for (let i = 0; i < len - 2; i++) {

    let left = i + 1
    let right = len - 1

    // 去外面的 index 重
    if (i > 0 && nums[i] === nums[i-1]) continue // 去重

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
     
      if (sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]])

        // 去里面 left 和 right 的重
        while(nums[left] === nums[left - 1]){
          left++
        }
        while(nums[right] === nums[right + 1]){
          right--
        } 
      } else if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      }
    }
  }

  return result
};
// @lc code=end

