/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function check (p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }

  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)

}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true
  }

  if (!root.left && !root.right) {
    return true
  }

  if (!root.left || !root.right) {
    return false
  }

  return check(root.left, root.right)
};
// @lc code=end

