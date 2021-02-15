/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// trie 26叉树

function TreeNode (val) {
  this.val = val
  this.isWord = false;
  this.chilrden = {}
}

var Trie = function() {
  this.root = new TreeNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curNode = this.root;
  for (let i = 0; i < word.length; i++){
    const letter = word.charAt(i)
    let hasLetter = curNode.chilrden[letter]
    if(!hasLetter){
      curNode.chilrden[letter] = new TreeNode(letter)
    }
    curNode = curNode.chilrden[letter]

    // 遍历到最后一个字符所对应的节点，将这个节点的isWord属性设为true。
    if(i === word.length - 1){
      curNode.isWord = true;
    }
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curNode = this.root;
  for(let i = 0; i < word.length; i++){
    const letter = word.charAt(i)
    if(!curNode.chilrden[letter]){
      return false;
    }
    curNode = curNode.chilrden[letter]
  
    if(i === word.length - 1){
      return curNode.isWord === true
    }
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curNode = this.root;
  for (let i = 0; i < prefix.length; i++){
    const letter = prefix.charAt(i)
    // 凡是查找的单词的中间某个字符，没有找到节点的，返回false
    if(!curNode.chilrden[letter]){
        return false;
    }
    curNode = curNode.chilrden[letter]
  }
  // 每个字符都找到了节点，返回true
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

