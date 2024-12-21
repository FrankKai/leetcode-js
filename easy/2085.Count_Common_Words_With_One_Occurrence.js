/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  function calc(arr) {
    const map = new Map();
    for (const str of arr) {
      map.set(str, map.has(str) ? map.get(str) + 1 : 1);
    }
    return map;
  }
  const wm1 = calc(words1);
  const wm2 = calc(words2);
  let count = 0;
  for (const str of words1) {
    if (wm1.get(str) === 1 && wm2.get(str) === 1) {
      count++;
    }
  }
  return count;
};
