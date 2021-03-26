/**
题目描述
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：


输入：s = "We are happy."
输出："We%20are%20happy."
限制：

0 <= s 的长度 <= 10000

解题方案
最简单的方案自然是直接使用库函数啦！当然题目肯定是不希望我们这样做的！
增加一个新字符串，遍历原来的字符串，遍历过程中，如果非空格则将原来的字符直接拼接到新字符串中，如果遇到空格则将%20拼接到新字符串中
时间复杂度：O(n)O(n)，空间复杂度：O(n)O(n)
 */

/**
 * @param {string} data
 * @return {string}
 */
let data = "We are happy.";
var replaceSpace = function(data) { 
  let newStr =  '';
  for( let i=0; i < data.length ; i++ ) {
    if( data[i] === " " ) {
      newStr += "%20";
    } else {
      newStr += data[i];
    }
  }
  return newStr
};
console.info(replaceSpace(data));
