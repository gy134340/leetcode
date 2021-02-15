/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */


// the number of the paths starting from self
function helper(root, sum) {
  if (root === null) return 0;
  const l = helper(root.left, sum - root.val);
  const r = helper(root.right, sum - root.val);

  return l + r + (root.val === sum ? 1 : 0);
}


// 1. 前缀和 (两个节点的前缀和相减)
// 2. 双重 dfs
var pathSum = function(root, sum) {
  // tag: dfs tree
  if (root === null) return 0;
  // the number of the paths starting from self
  const self = helper(root, sum);
  // we don't know the answer, so we just pass it down
  const l = pathSum(root.left, sum);
  // we don't know the answer, so we just pass it down
  const r = pathSum(root.right, sum);

  return self + l + r;

};
// @lc code=end

