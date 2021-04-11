/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const uniqNums = new Set(s.match(/\d/g));
  return [...uniqNums].sort((x, y) => parseInt(y) - parseInt(x))[1] || -1;
};
