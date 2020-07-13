/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * 解法：栈
   * 思路：
   * 1.定义一个最大长度
   * 2.无重复项时依次入栈，记录最大长度为栈的长度
   * 3.有重复项时清空栈，指针指向下一个元素
   * 注意：
   * 1.""和" "
   * 2."au"这种没有重复字符的字符串
   */
  if (!s) return 0;
  let subStrMaxLength = 1;
  let stack = [];
  let i = 0;
  let j = 0;
  while (i < s.length || stack === []) {
    if (!stack.includes(s[i])) {
      stack.push(s[i]);
      i++;
    } else {
      // "aua"
      if (stack.length > subStrMaxLength) {
        subStrMaxLength = stack.length;
      }
      j++;
      i = j;
      stack = [];
    }
  }
  // "au"
  if (stack.length > subStrMaxLength) {
    subStrMaxLength = stack.length;
  }
  return subStrMaxLength;
};
