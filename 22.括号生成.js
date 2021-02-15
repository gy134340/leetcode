/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) {
    return []
  }

  let left = 0
  let right = 0
  let result = []

  function checkBrackets(str){
    var depth = 0;
    for(var i in str) {   
      if(str[i] == '('){
        depth++;
      } else if(str[i] == ')') {
        depth--;
      }  
      if (depth < 0) return false;
    }
    if(depth > 0) return false;

    return true;
}

  const backTrack = (str, left, right) => {
    if (left === right && left === n && right === n) {
      if (checkBrackets(str)) {
        result.push(str)
      }
      return
    }

    if (left < n) {
      leftStr = str + '('
      backTrack(leftStr, left + 1, right)
    }

    if (right < n) {
      rightStr = str + ')'
      backTrack(rightStr, left, right + 1)
    }

  }

  backTrack('', left, right)


  return result

};
// @lc code=end

