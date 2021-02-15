/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  const h = board.length, w = board[0].length;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = new Array(h);
  for (let i = 0; i < visited.length; ++i) {
      visited[i] = new Array(w).fill(false);
  }
  const check = (i, j, s, k) => {
      if (board[i][j] != s.charAt(k)) {
          return false;
      } else if (k == s.length - 1) {
          return true;
      }
      visited[i][j] = true;
      let result = false;
      for (const [dx, dy] of directions) {
          let newi = i + dx, newj = j + dy;
          if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
              if (!visited[newi][newj]) {
                  const flag = check(newi, newj, s, k + 1);
                  if (flag) {
                      result = true;
                      break;
                  }
              }
          }
      }
      visited[i][j] = false;
      return result;
  }

  for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
          const flag = check(i, j, word, 0);
          if (flag) {
              return true;
          }
      }
  }
  return false;
};

// var exist = function(board, word) {
//   let isIn = false
//   let m = board.length
//   let n = board[0].length

//   const backTrack = (pre, i, j, board) => {
//     if (i < m && j < n) {
//       if (word.substring(0, pre.length) === pre) {
//         if (word.length === pre.length) {
//           isIn = true
//           return
//         }
//       } else {
//         return
//       }
//     } else {
//       return
//     }

//     const nextLetter = word[pre.length]

//     board[i][j] = false

//     // 右
//     let right = board[i] && board[i][j + 1]
//     if (right === nextLetter) {
//       backTrack(pre.concat(right), i, j + 1, board.map(item => item.slice(0)))
//     }

//     // 下
//     let bottom = board[i+1] && board[i + 1][j]
//     if (bottom === nextLetter) {
//       backTrack(pre.concat(bottom), i + 1, j, board.map(item => item.slice(0)))
//     }

//     // 上
//     let top = board[i - 1] && board[i - 1][j]
//     if (top === nextLetter) {
//       backTrack(pre.concat(top), i - 1, j, board.map(item => item.slice(0)))
//     }

//     // 左
//     let left = board[i] && board[i][j - 1]
//     if (left === nextLetter) {
//       backTrack(pre.concat(left), i, j - 1, board.map(item => item.slice(0)))
//     }

//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === word[0]) {  // 找第一个字母
//         backTrack(board[i][j], i, j, board.map(item => item.slice(0)))
//       }
//     }
//   }

//   return isIn
// };

// @lc code=end

