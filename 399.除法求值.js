/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/evaluate-division/solution/js-lin-jie-biao-dfs-by-yleave-l8p5/
// 这题不会
var calcEquation = function(equations, values, queries) {
  // visit 数组标记在搜索过程中是否访问过
  let map = new Map(), visit = new Map(), res = [];

  const dfs = (src, dst) => {
    // 若可达，且找到了目的节点，返回 1.0 表示成功到达
    if (src === dst) { return 1.0; }

    let adjs = map.get(src);

    // 遍历 src 的所有边，若未访问过，则对其调用 dfs 获取路径积
    for (let i = 0; i < adjs.length; ++i) {
      let next = adjs[i];
      if (!visit.get(next[0])) {
        visit.set(next[0], true);
        let ret = dfs(next[0], dst);
        visit.set(next[0], false);
        // 若可达 dst，则返回当前边权与后续的边权积 ret 的乘积
        if (ret !== -1.0) {
          return next[1] * ret;
        }
      }
    }

    return -1.0; // 否则，不可达，返回 -1.0
  };

  // 创建邻接表
  // Map(3) {
  //   'a' => [ [ 'b', 2 ] ],
  //   'b' => [ [ 'a', 0.5 ], [ 'c', 3 ] ],
  //   'c' => [ [ 'b', 0.3333333333333333 ] ]
  // }
  for (let i = 0; i < equations.length; ++i) {
    let e = equations[i], v = values[i];

    if (!map.has(e[0])) {
      map.set(e[0], []);
      visit.set(e[0], false);
    }
    if (!map.has(e[1])) {
      map.set(e[1], []);
      visit.set(e[1], false);
    }
    map.get(e[0]).push([e[1], v]);
    map.get(e[1]).push([e[0], 1 / v]);
  }

  for (let q of queries) {
    let src = q[0], dist = q[1];
    if (map.has(src) && map.has(dist)) {
      visit.set(src, true);
      res.push(dfs(n0, n1));
      visit.set(src, false);
    } else {
      res.push(-1.0);
    }
  }

  return res;
};
// @lc code=end

