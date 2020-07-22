/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0;
  for (const char of S) {
    if (J.indexOf(char) !== -1) count++;
  }
  return count;
};
