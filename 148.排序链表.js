/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

  let pre = new ListNode(-1)
  let store = pre

  let res = []

  while (head) {
    res.push(head.val)
    head = head.next
  }

  res = res.sort((a, b) => a - b)

  for (let item of res) {
    pre.next = new ListNode(item)
    pre = pre.next
  }

  return store.next
};
// @lc code=end

