/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const result = []

  const traverse = (arr, parent) => {
    if (!arr.find(item => item !== null)) {
      result.push(parent)
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null) {
        const node = new TreeNode(arr[i])
        const nextArr = arr.slice()
        nextArr[i] = null

        if (!parent) {
          node.root = node
          traverse(nextArr, node)
        } else if (arr[i] < parent.val) {
          if (parent) {
            parent.left = node
          }
          
          traverse(nextArr, node)
        } else {
          if (parent) {
            parent.right = node
          }
          traverse(nextArr, node)
        }
      }

    }
  }


  traverse(Array.from(new Array(n), (_, i) => i + 1))

  return result
};
// @lc code=end

