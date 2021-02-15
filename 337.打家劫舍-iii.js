/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  if (!root) {
    return 0
  }

  const f = new Map() // 节点选中
  const g = new Map() // 节点不被选中


  const dfs = (node) => {
    if (node === null) {
      return null
    }
    
    dfs(node.left)
    dfs(node.right)
    
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));

  }

  dfs(root)

  return Math.max(f.get(root), g.get(root))

};
// @lc code=end

