/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let i = 0;
  let count = 0;
  while (i < guess.length) {
    if (guess[i] === answer[i]) {
      count++;
    }
    i++;
  }
  return count;
};
