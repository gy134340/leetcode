/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 乱序改有序
// https://leetcode-cn.com/problems/queue-reconstruction-by-height/solution/xian-pai-xu-zai-cha-dui-dong-hua-yan-shi-suan-fa-g/
// 渔（套路）：一般这种数对，还涉及排序的，根据第一个元素正向排序，根据第二个元素反向排序，或者根据第一个元素反向排序，根据第二个元素正向排序，往往能够简化解题过程。
// 按照元素 1 进行降序排序，对于每个元素，在其之前的元素的个数，就是大于等于他的元素的数量
// 而按照第二个元素正向排序，我们希望 k 大的尽量在后面，减少插入操作的次数。

var reconstructQueue = function(people) {
  people.sort((a, b) => {
    return b[0] - a[0] || a[1] - b[1]
  })

  const res = []
  // 对于每个元素，在其之前的元素的个数，就是大于等于他的元素的数量
  people.forEach(p => {
    if (p[1] < res.length) {
      res.splice(p[1], 0, p)
    } else {
      res.push(p)
    }
  })
  return res
};
// @lc code=end

