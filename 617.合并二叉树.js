/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 || !t2) {
    return t1 || t2
  }
  const res = new TreeNode(t1.val + t2.val)
  
  if (t1.left || t2.left) {
    res.left = mergeTrees(t1.left, t2.left)
  }
  if (t1.right || t2.right) {
    res.right = mergeTrees(t1.right, t2.right)
  }
  return res
};
// @lc code=end

