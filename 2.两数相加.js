/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let left = l1
  let right = l2
  let ld = null
  let next = null

  while (left !== null || right !== null) {
    const l1Value = left ? left.val : 0
    const l2Value = right ? right.val : 0
    const current = l1Value + l2Value
    
    left = left ? left.next : null
    right = right ? right.next : null

    if (!ld) {
      let tmpValue = current % 10
      let nextValue = Math.floor(current / 10)
      ld = new ListNode(tmpValue)
      if (left || right || nextValue) {
        next = new ListNode(nextValue)
        ld.next = next
      }
    } else {
      let tmpValue = next.val + current
      next.val = tmpValue % 10

      let nextValue = Math.floor(tmpValue / 10)

      // 还需要下一个时
      if (left || right || nextValue) {
        const tmp = new ListNode(nextValue)
        next.next = tmp
        next = tmp
      }
    }

  }
  
  return ld
};

// @lc code=end

