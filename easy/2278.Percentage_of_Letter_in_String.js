/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let count = 0;
  for (const item of s) {
    if (item === letter) {
      count++;
    }
  }
  const result = Math.floor((count / s.length) * 100);
  return result;
};
