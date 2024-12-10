/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  /**
   * 解法1：栈
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
  /**
   * 解法2: HashMap
   * 特殊用例：
   * ""," ","au"
   */
  if (!s) return 0;
  let map = new Map();
  let maxLength = 1;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    const char = s[j];
    if (map.has(char)) {
      if (map.size > maxLength) {
        maxLength = map.size;
      }
      map = new Map();
      i++;
      j = i;
    } else {
      map.set(char, char);
      j++;
    }
  }
  if (map.size > maxLength) {
    maxLength = map.size;
  }
  return maxLength;
  /** 解法3：滑动窗口 **/
  const set = new Set();
  let i = 0;
  let j = 0;
  let len = 0;
  while (i < s.length) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      len = Math.max(set.size, len);
      i++;
    } else {
      set.delete(s[j])
      j++;
    }
  }
  return len;
};
