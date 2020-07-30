/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  let i = 0;
  let j = 1;
  while (j < time.length) {
    if ((time[i] + time[j]) % 60 === 0) {
      count++;
    }
    if (j === time.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return count;
};
