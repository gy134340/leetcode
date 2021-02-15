/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 1. 每个物品选 or 不选 
// https://lucifer.ren/leetcode/problems/416.partition-equal-subset-sum.html
var canPartition = function(nums) {

  // 找到 1/2 的值
  let sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2) {
    return false;
  } else {
    sum = sum / 2;
  }

  // 初始化 dp
  // 记 dp[i][target] 为 nums 数组内前 i 个数
  // 能否构成和为 target（数字） 的子序列的可能
  // note: 这里算的 dp 是和能不能 = 1/2 num
  const dp = Array.from(nums).map(() =>
    // 0 - 1/2 sum
    Array.from({ length: sum + 1 }).fill(false)
  );

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 0; i < dp.length - 1; i++) {

    // 例子：target（0-11）
    for (let target = 0; target < dp[0].length; target++) {
      if (target - nums[i] >= 0) {

        // 不取 || 取了（把这个 target - nums[i] 换另一个 target）
        dp[i + 1][target] = dp[i][target] || dp[i][target - nums[i]]
      } else {
        dp[i + 1][target] = dp[i][target]
      }
    }
  }

  return dp[nums.length - 1][sum];
};
// @lc code=end

