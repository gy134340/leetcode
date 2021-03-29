/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

//  超时了
// var maxCoins = function(nums) {
//   let max = 0

//   const backTrack = (nums, pre) => {

//     if (!nums || nums.length === 0) {
//       max = Math.max(pre, max)
//       return
//     }
//     const len = nums.length
//     for (let i = 0; i < len; i++) {
//       const preVal = i - 1 < 0 ? 1 : nums[i - 1]
//       const nextVal = i + 1 >= len ? 1 : nums[i + 1]
//       const curVal = nums[i] * preVal * nextVal
//       let next = pre + curVal

//       const nextNums = nums.slice()
//       nextNums.splice(i, 1)
//       backTrack(nextNums, next)
//     }

//   }


//   backTrack(nums, 0)
//   return max
// };

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp https://leetcode-cn.com/problems/burst-balloons/solution/zhe-ge-cai-pu-zi-ji-zai-jia-ye-neng-zuo-guan-jian-/
var maxCoins = function(nums) {
  const n = nums.length
  // https://leetcode-cn.com/problems/burst-balloons/solution/dong-tai-gui-hua-js312-chuo-qi-qiu-by-fe-lucifer/
  let dp = new Array(n + 2).fill(null).map(() => {
    return new Array(n + 2).fill(0)
  })

  let points = [1, ...nums, 1];

  // startIndex 从左往右
  for (let i = n; i >= 0; i--) {
    // 从左往右
    for (let j = i + 1; j < n + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          points[j] * points[k] * points[i] + dp[i][k] + dp[k][j]
        );
      }
    }
  }
  return dp[0][n + 1]



};
// @lc code=end

