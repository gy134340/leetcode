/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

  const checkRoot = (root, lower, upper) => {
    if (root === null) {
      return true
    }

    if (root.val <= lower || root.val >= upper ) {
      return false
    }

    return checkRoot(root.left, lower, root.val) && checkRoot(root.right, root.val, upper);
  }

  return checkRoot(root, -Infinity, Infinity)
};
// @lc code=end

