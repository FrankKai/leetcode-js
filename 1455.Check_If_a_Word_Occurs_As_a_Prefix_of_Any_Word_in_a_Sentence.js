/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  /**
   * 解法1：startsWith
   */
  const charArr = sentence.split(" ");
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
  /**
   * 解法2：indexOf
   */
  const charArr = sentence.split(" ");
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i].indexOf(searchWord) === 0) {
      return i + 1;
    }
  }
  return -1;
};
