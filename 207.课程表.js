/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// https://segmentfault.com/a/1190000022712107
var canFinish = function(numCourses, prerequisites) {
  if (prerequisites.length === 0) {
      return true
  }

  // come in table,（1 been pre num++）
  let inDegree = new Array(numCourses).fill(0)

  // come back 表, 多个 source（2 pre 1, 2 pre 3） 
  let map = new Map()
  
  for (let e of prerequisites) {
    inDegree[e[0]]++
    if (!map.has(e[1])) {
      map.set(e[1], [])
    }
    map.get(e[1]).push(e[0])
  }

  let queue = []
  // 所有没有来源的点
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  while (queue.length > 0) {
    let node = queue.shift() 
    numCourses--

    // map 存在这个点
    if (map.has(node)) {  
      for(let item of map.get(node)) {
        inDegree[item]--
        if (inDegree[item] === 0) {
          queue.push(item)
        }
      }
    }
  }
  return numCourses === 0
};
// @lc code=end

