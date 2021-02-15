/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// // generate possible p
// const dfs = (arr, pre) => {
// if (!arr || !arr.length) {
//   map.set(pre.join(''), true)
//   return
// }
// for (let i = 0; i < arr.length; i++) {
//   let nextArr = arr.slice()
//   nextArr.splice(i, 1)
//   dfs(nextArr, pre.concat(arr[i]))
// }
// }

// dfs(p.split(''), [])

// @lc code=start

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/hua-dong-chuang-kou-438-zhao-dao-zi-fu-c-ut38/
var findAnagrams = function(s, p) {
  let map = new Map(), window = new Map();
  let left = 0, right = 0, res = [], matchNum = 0; // 表示匹配到的字母的个数

  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char)+1);
    }
  }

  while (right < s.length) {
    let char = s[right];
    if (map.has(char)) {
      if (!window.has(char)) {
        window.set(char, 1);
      } else {
        window.set(char, window.get(char)+1);
      }
      
      if (map.get(char) === window.get(char)) {
        matchNum++;
      }
    }
    right++;
    
    while (matchNum === map.size) {
      if (right - left === p.length) {
          res.push(left);
      }

      // 左边移动 1
      let tmpChar = s[left];
      if (map.has(tmpChar)) {
        window.set(tmpChar, window.get(tmpChar)-1);
        if (window.get(tmpChar) < map.get(tmpChar)) {
          matchNum--;
        }
      }
      left++;
    }
  }
  return res;
};
// @lc code=end

