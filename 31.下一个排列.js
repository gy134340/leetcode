/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 其实就是从数组倒着查找，找到nums[i] 比nums[i+1]小的时候，
// 就将nums[i]跟nums[i+1]到nums[nums.length - 1]当中找到一个最小的比nums[i]大的元素交换。
// 交换后，再把nums[i+1]到nums[nums.length-1]排序，就ok了
var nextPermutation = function(nums) {


  function reverseRange(A, i, j) {
    while (i < j) {
      const temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i++;
      j--;
    }
  }

  // 时间复杂度O(n) 空间复杂度O(1)
  if (nums == null || nums.length <= 1) return;

  let i = nums.length - 2;
  // 从后往前找到第一个降序的,相当于找到了我们的回溯点
  while (i > -1 && nums[i + 1] <= nums[i]) {
    i--;
  }

  // 如果找了就swap
  if (i > -1) {
    let j = nums.length - 1;
    // 找到从右边起第一个大于nums[i]的，并将其和nums[i]进行交换
    // 因为如果交换的数字比nums[i]还要小肯定不符合题意
    while (nums[j] <= nums[i]) {
      j--;
    }
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // （剩下的元素直接升序）
  // 最后我们只需要将剩下的元素从左到右，依次填入当前最小的元素就可以保证是大于当前排列的最小值了
  reverseRange(nums, i + 1, nums.length - 1);

  return nums

};
// @lc code=end

