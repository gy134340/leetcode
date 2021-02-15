/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root
  }
  const tmp = root.left
  root.left = root.right
  root.right = tmp
  if (root.left) {
    invertTree(root.left)
  }
  if (root.right) {
    invertTree(root.right)
  }
  return root
};
// @lc code=end

