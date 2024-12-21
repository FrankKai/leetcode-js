/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  numbers.push(numbers.shift());
  return numbers;
};
