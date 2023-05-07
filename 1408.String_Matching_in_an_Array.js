/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    words.sort((x, y) => x.length - y.length);
    let i = 0;
    const result = [];
    while (i < words.length) {
      if (words.slice(i + 1).findIndex((word) => word.includes(words[i])) !== -1) {
        result.push(words[i]);
      }
      i++
    }
    return result;
  };