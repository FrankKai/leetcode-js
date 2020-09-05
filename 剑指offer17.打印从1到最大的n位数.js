/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const max = parseInt("9".repeat(n));
  const result = new Array(max).fill(1).map((num, i) => num + i);
  return result;
};
