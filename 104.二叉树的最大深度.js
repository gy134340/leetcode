/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  // if (!root) {
  //   return 0
  // }
  let maxDepth = 0
  const checkDepth = (node, depth) => {

    if (!node) {
      maxDepth = Math.max(maxDepth, depth)
      return
    }

    checkDepth(node.left, depth + 1)
    checkDepth(node.right, depth + 1)
  }

  checkDepth(root, 0)

  return maxDepth
};
// @lc code=end

