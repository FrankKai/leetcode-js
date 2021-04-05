/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  // 解法1
  const map = new Map();
  const numPatt = /\d/;
  let currentNum = "";
  let i = 0;
  while (i < word.length) {
    if (numPatt.test(word[i])) {
      currentNum += word[i];
      i++;
      continue;
    }
    if (!numPatt.test(word[i]) && currentNum) {
      map.set(parseInt(currentNum), true);
      currentNum = "";
    }
    i++;
  }
  if (currentNum) map.set(parseInt(currentNum), true);
  return map.size;
  // 解法2
  const matches = word.match(/\d+/g);
  if (!matches) return 0;
  return new Set(matches.map((e) => parseInt(e))).size;
};
