/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// preorder => root -> left, right
// inorder => left -> root -> right
var buildTree = function(preorder, inorder) {

  const generate = (preorder, inorder) => {
    if (!preorder.length) {
      return null
    }
    
    const root = new TreeNode(preorder[0])


    // 找到中序遍历的 index
    // left length
    const index = inorder.findIndex(item => item === preorder[0])

    // preorder 数组的第1项[9]（左子树的大小）和后3项[20, 15, 7]（右子树的大小）又分别是左子树和右子树的前序遍历
    const left = generate(preorder.slice(1, index + 1), inorder.slice(0, index))
    const right = generate(preorder.slice(index + 1), inorder.slice(index + 1))
    root.left = left
    root.right = right

    return root
  }

  // const root = new TreeNode(preorder[0])
  return generate(preorder, inorder)

};
// @lc code=end

