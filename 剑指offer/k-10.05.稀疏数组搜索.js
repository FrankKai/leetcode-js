/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  if (words.length === 1) {
    const [word] = words;
    if (word === s) {
      return 0;
    } else {
      return -1;
    }
  }
  let i = 0;
  let j = words.length - 1;
  while (i < j) {
    if (words[i] === s) {
      return i;
    } else if (words[j] === s) {
      return j;
    } else {
      i++;
      j--;
    }
  }
  return -1;
};
