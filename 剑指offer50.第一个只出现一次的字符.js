/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  /**
   * 思路：Map的key具有顺序特性
   */
  const map = new Map();
  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  let result = " ";
  for (const [key, value] of map) {
    if (value === 1) {
      result = key;
      break;
    }
  }
  return result;
};
