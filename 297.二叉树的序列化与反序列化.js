/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// bfs is better than dfs  
var serialize = function(root) {
    const preOrder = []
    const inOrder = []

    const dfs = (node) => {
      if (node === null) {
        return
      }
      const salt = Math.random()
      preOrder.push(`${node.val}?${salt}`)
      dfs(node.left)
      inOrder.push(`${node.val}?${salt}`)
      dfs(node.right)
    }

    dfs(root)
    // console.log('🐞-preOrder', preOrder, inOrder)
    return `${JSON.stringify(preOrder)}&${JSON.stringify(inOrder)}`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const preOrder = JSON.parse(data.split('&')[0])
  const inOrder = JSON.parse(data.split('&')[1])
  console.log('🐞-pre', preOrder, inOrder)

  const generate = (preorder, inorder) => {
    if (!preorder || !preorder.length) {
      return null
    }
    
    const root = new TreeNode(preorder[0].split('?')[0])


    // 找到中序遍历的 index
    // index = left length
    // f**, 存在两个值一样
    const index = inorder.findIndex(item => item === preorder[0])

    // preorder 数组的第1项[9]（左子树的大小）和后3项[20, 15, 7]（右子树的大小）又分别是左子树和右子树的前序遍历
    const left = generate(preorder.slice(1, index + 1), inorder.slice(0, index))
    const right = generate(preorder.slice(index + 1), inorder.slice(index + 1))
    if (left) {
      root.left = left
    }
    if (right) {
      root.right = right
    }

    return root
  }

  // const root = new TreeNode(preorder[0])
  return generate(preOrder, inOrder)
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

