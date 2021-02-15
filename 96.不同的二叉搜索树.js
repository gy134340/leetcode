/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {

  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {

        // 当前数量 = 左子数量 + 右子数量
        // G[i] 默认为 0
        // 不同二叉搜索树的个数为 F(3,7)。我们将 [1,2]构建不同左子树的数量表示为 G(2),
        //  从 [4, 5, 6, 7] 构建不同右子树的数量表示为 G(4)G(4)

        // g2 = g0*g2 + g1*g1
        // 此时 n 为 i
        // G[j - 1] 左子数
        // G[i - j] 右子树
        G[i] = G[i] + G[j - 1] * G[i - j];
    }
  }
  return G[n];
}
// @lc code=end

