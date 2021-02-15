/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) {
    return null;
  } 
  let p1 = head
  let p2 = head
  

  // note: 相遇点不是入环点
  // 快指针路程始终是慢指针 2 倍（慢指针需要类似走 2 * a），第一次相遇时，慢指针比快指针少走了入环点的距离（a）
  while (p2 !== null) {
    p1 = p1.next
    if (p2.next) {
      p2 = p2.next.next
    } else {
      return null
    }
    if (p1 === p2) {
      let ptr = head // 相遇后再从头部走 a 步即可
      while (ptr !== p1) {
        ptr = ptr.next;
        p1 = p1.next;
      }
      return ptr
    }
  }
   
  return null
};
// @lc code=end

