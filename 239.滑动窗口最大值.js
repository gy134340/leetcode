/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://xie.infoq.cn/article/e6560b383cd4352445b6a8573
// 每次滑动窗口时，将移出窗口的值移除队列
// 将新进入窗口的值存入队列，同时将队列中比移入值小的元素都移除，这个操作会保证队列都是从大到小排列。
// 队列的第一个值始终是当前窗口中最大值，每次循环将其存入结果数组即可。
var maxSlidingWindow = function(nums, k) {
  let result = [];
  let dequeue = [];
  for (let i = 0; i < nums.length; i++) {
    // 4321
    // 去掉第一个值，leftIndex++ 去掉左面的一个
    if (nums[i - k] === dequeue[0]) {
      dequeue.shift();
    }
    // 如果队列中有值，则将队列中比当前值小的值全部清空。保证队列从大到小排列。
    while (dequeue.length && nums[i] > dequeue[dequeue.length - 1]) {
      dequeue.pop();
    }
    // 将新进入窗口的值存入队列。
    dequeue.push(nums[i]);
    // 当窗口被填满后，才开始存储结果
    if (i >= k - 1) {
      // 当前队列第一个值始终是当前滑块最大值，可直接存入结果
      result.push(dequeue[0]);
    }
  }
  return result;

};
// @lc code=end

