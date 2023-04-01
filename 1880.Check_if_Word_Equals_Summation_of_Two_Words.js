/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  function getSingleCharValue(char) {
    return `${char.charCodeAt() - "a".charCodeAt()}`;
  }
  function getStrValues(str) {
    let res = "";
    for (const char of str) {
      res += getSingleCharValue(char);
    }
    return parseInt(res);
  }
  return (
    getStrValues(firstWord) + getStrValues(secondWord) ===
    getStrValues(targetWord)
  );
};
