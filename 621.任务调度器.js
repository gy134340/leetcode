/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// https://markdowner.net/skill/123047167077195776
var leastInterval = function(tasks, n) {
  let h = Array(26).fill(0)
  if (n === 0) return tasks.length

  // 所有字母 hash 最大
  for(var i = 0; i < tasks.length; i++) 
    h[tasks[i].charCodeAt() - 65]++
  
  // 找到最多的字母 A
  let max = Math.max(...h), maxCount = 0

  // 所有数量跟 A 一样的字母，maxCount 需 +1
  h.forEach(item => item === max && maxCount++)

  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)

};
// @lc code=end

