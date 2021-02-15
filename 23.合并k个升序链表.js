/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

  let res = new ListNode(-1)
  let pre = res

  const merge = (lists) => {
    let len = lists.length
    if (!len) {
      return
    }

    let min = Number.MAX_VALUE
    let minIndex = -1
    
    // 找到最小的一个
    for (let i = 0; i < len; i++) {
      if (lists[i] && lists[i].val < min) {
        min = lists[i].val
        minIndex = i
      }
    }
    if (minIndex !== -1) {
      res.next = lists[minIndex]
      res = res.next
      lists[minIndex] = lists[minIndex] ? lists[minIndex].next : null // 也是其中一个 head
      merge(lists)
    }
  }

  merge(lists)
  return pre.next
};
// @lc code=end

