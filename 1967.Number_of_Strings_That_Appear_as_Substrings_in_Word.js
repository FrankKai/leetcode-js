/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  return patterns.reduce((acc, cur) => {
    if (word.includes(cur)) {
      acc++;
    }
    return acc;
  }, 0);
};
