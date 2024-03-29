/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }

  let p1 = head
  let p2 = head
  while (p1 !== null && p2 !== null) {
    p1 = p1.next
    p2 = p2.next ? p2.next.next : null
    if (p1 === p2) {
      return true
    }
  }
  return false
    
};
// @lc code=end

