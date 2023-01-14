/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  // 统计每种字符出现的次数
  // 判断是否能被words.length整除
  if (words.length === 1) {
    return true;
  }
  const map = new Map();
  for (const word of words) {
    for (const char of word) {
      map.set(char, map.has(char) ? map.get(char) + 1 : 1);
    }
  }
  return [...map.values()].every((item) => item % words.length === 0);
};
