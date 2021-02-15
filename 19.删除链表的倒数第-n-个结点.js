/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
    return head
  }

  const map = []
  let oldHead = head
  let i = 0
  while (head !== null) {
    map[i] = head
    i++
    head = head.next
  }

  let index = map.length - n // cur node

  if (index >= 0) {
    const curNode = map[index]
    const preNode = map[index - 1]

    if (curNode === oldHead) {
      oldHead = oldHead.next
      return oldHead
    } 

    if (preNode) {
      preNode.next = preNode.next ? preNode.next.next : null
    }
    return oldHead
  }


  // 第二种
  // 因此我们可以使用两个指针 \textit{first}first 和 \textit{second}second 同时对链表进行遍历，并且 \textit{first}first 比 \textit{second}second 超前 nn 个节点

};
// @lc code=end

