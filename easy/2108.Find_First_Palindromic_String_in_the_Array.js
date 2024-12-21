/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    let result = '';
    for (const word of words) {
      let str = "";
      for (const char of word) {
        str = char + str;
      }
      if (word === str) {
        result = word;
        break;
      }
    }
    return result;
  };