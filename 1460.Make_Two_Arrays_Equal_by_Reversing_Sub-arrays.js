/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target.sort();
  arr.sort();
  const result = target.toString() === arr.toString();
  return result;
};
