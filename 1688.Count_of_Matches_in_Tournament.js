/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let number = 0;
  while (n !== 1) {
    const pairs = Math.floor(n / 2);
    number += pairs;
    if (n % 2 === 1) {
      n = pairs + 1;
    } else {
      n = pairs;
    }
  }
  return number;
};
