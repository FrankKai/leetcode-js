/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  function calc(word) {
    const map = new Map();
    for (const char of word) {
      map.set(char, map.has(char) ? map.get(char) + 1 : 1);
    }
    return map;
  }

  let map1 = calc(word1);
  let map2 = calc(word2);
  let abs = [];
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    const map1Num = map1.get(char) || 0;
    const map2Num = map2.get(char) || 0;
    abs.push(Math.abs(map1Num - map2Num));
  }
  return abs.every((item) => item <= 3);
};
