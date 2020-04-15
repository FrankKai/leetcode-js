/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  /**
   * 解法1：every
   * 性能：72ms 35MB
   */
  let arr = word.split("");
  let allUppercase = arr.every((char) => char === char.toUpperCase());
  let allLowercase = arr.every((char) => char === char.toLowerCase());
  let firstUpperCase = false;
  arr.forEach((char, i) => {
    if (i === 0 && char === char.toUpperCase()) {
      firstUpperCase = true;
    } else if (char !== char.toLowerCase()) {
      firstUpperCase = false;
    }
  });
  return allUppercase || allLowercase || firstUpperCase;
};
