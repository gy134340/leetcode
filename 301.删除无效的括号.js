/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// https://leetcode-cn.com/problems/remove-invalid-parentheses/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--56/
// backtrack 回溯 dfs (每个节点 true || false)
// =  求所有的合法子字符串，并返回最长的那几个
// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let res = [''];

  const backTrack = (s, start, end, count, temp) => {
    //当前右括号多了, 后边无论是什么都不可能是合法字符串了, 直接结束
    if (count < 0) {
      return;
    }
    // 所有合法的子字符串
    if (start === end) {
      if (count === 0) {
        let max = res[0].length;
        if (temp.length > max) {
          res.length = 0;
          res.push(temp);
        } else if (temp.length === max) {
          res.push(temp);
        }
      }
      return;
    }
    // dfs 左侧，添加当前字符
    if (s[start] === '(') {
      backTrack(s, start + 1, end,
        count + 1, temp + '(');
    } else if (s[start] === ')') {
      backTrack(s, start + 1, end,
        count - 1, temp + ')');
    } else {
      // 字母
      backTrack(s, start + 1, end,
        count, temp + s.charAt(start)
      );
    }
  
    // dfs 右侧，不添加当前字符
    if (s[start] === '(' || s[start] === ')') {
      backTrack(s, start + 1, end, count, temp);
    }
  }
  
  backTrack(s, 0, s.length, 0, '');

  //去重
  return [...new Set(res)];
};
// @lc code=end

