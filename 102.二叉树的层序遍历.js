/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []

  if (!root) {
    return []
  }

  const getNodes = (node, depth) => {
    result[depth] = !!result[depth] ? result[depth] : []

    if (node) {
      result[depth].push(node.val)
    }
    if (node && node.left) {
      getNodes(node.left, depth + 1)
    }

    if (node && node.right) {
      getNodes(node.right, depth + 1)
    }
  }

  getNodes(root, 0)

  return result
};
// @lc code=end

