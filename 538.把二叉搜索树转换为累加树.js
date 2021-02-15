/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {

  if (!root) {
    return root
  }

  const dfs = (node, ans) => {
    if (!node) {
      return null
    }
    
    dfs(node.left, ans)
    ans.push(node)
    dfs(node.right, ans)
  }

  let ans = []
  dfs(root, ans)

  console.log('🐞-ans', ans)

  const len = ans.length - 1
  for (let i = len - 1; i >=0; i--) {
    ans[i].val = ans[i+1].val + ans[i].val
  }
  console.log('🐞-ans', ans)

  return root
};
// @lc code=end

