/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  /**
   * 思路：滑动窗口 + Map统计
   */
  let left = 0,
    right = 10;
  const map = new Map();
  while (right <= s.length) {
    const str = s.substring(left, right);
    map.set(str, map.has(str) ? map.get(str) + 1 : 1);
    left++;
    right++;
  }
  const result = [];
  for (const [str, count] of map) {
    if (count > 1) result.push(str);
  }
  return result;
};
