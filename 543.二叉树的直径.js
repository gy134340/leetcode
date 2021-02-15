/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let res = 0;

  let dfs = (root) => {
    if (!root) return 0;
    // 后序遍历 先遍历左孩子
    let left = root.left && dfs(root.left) + 1;
    let right = root.right && dfs(root.right) + 1;
    // 每次求直径，比较左右孩子路径和的最大值
    res = Math.max(left + right, res);
    // 递归时候返回左右孩子深度最长
    return Math.max(left, right)
  }
  dfs(root);

  return res;
};
// @lc code=end

