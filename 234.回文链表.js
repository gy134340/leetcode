/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true
  }
  const arr = []
  
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0, j = arr.length -1; i < j; ++i, --j) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }

  return true
};
// @lc code=end

