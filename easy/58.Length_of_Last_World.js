/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 解法1
  let i = s.length - 1;
  let len = 0;
  let isStart = false;
  while(i >= 0){
      // 当开始统计单词，并且遇到第一个空格时，结束统计
      if(isStart && s[i] === " "){
          return len;
      }
      if(s[i] && s[i] !== " "){
        len++;
        isStart = true;
      }
      i--;
  }
  return len;
  // 解法2 js的api
  if (!s) return 0;
  var splitArr = s.trim().split(" ");
  var lastItem = splitArr[splitArr.length - 1];
  return lastItem.length;
};
