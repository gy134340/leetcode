/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // todo: 题目有问题 & accepted
  // let left = headA
  // let right = headB
  // let val = null
  // while (left !== null && val !== null) {
  //   while (right !== null && val !== null) {
  //     if (left === right) {
  //       val = left
  //     } else {
  //       right = right.next
  //     }
  //   }
  //   left = left.next
  // }

  // return val
  let a = headA,
    b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
// @lc code=end

