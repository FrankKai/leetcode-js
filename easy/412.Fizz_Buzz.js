/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  while (n > 0) {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.unshift("FizzBuzz");
    } else if (n % 5 === 0) {
      arr.unshift("Buzz");
    } else if (n % 3 === 0) {
      arr.unshift("Fizz");
    } else {
      arr.unshift(n.toString());
    }
    n--;
  }
  return arr;
};
