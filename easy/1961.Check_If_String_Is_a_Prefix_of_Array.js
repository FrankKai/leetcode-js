/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let str = "";
  let i = 0;
  let res = false;
  while (i < words.length) {
    if (str === s) {
      res = true;
      break;
    } else {
      str += words[i];
    }
    i++;
  }
  if (str === s) {
    res = true;
  }
  return res;
};
