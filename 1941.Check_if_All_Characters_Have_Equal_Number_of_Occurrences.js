/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  return new Set(map.values()).size === 1;
};
