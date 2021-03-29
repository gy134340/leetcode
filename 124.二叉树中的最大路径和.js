/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

  const dfs = (node) => {
      if (node === null) {
          return 0
      }

      let left = dfs(node.left)
      let right = dfs(node.right)
      const inner = left + right + node.val // 左中右

      maxSum = Math.max(inner, maxSum)

      const maxSub = node.val + Math.max(left, right)

      if (maxSub < 0) {
          return 0
      }
      return maxSub

  }
  dfs(root)

  return maxSum
};
// @lc code=end

