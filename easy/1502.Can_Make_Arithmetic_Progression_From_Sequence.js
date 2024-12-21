/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((x, y) => x - y);
  let i = 0;
  let j = 1;
  let initialDiff = arr[j] - arr[i];
  let equalDiff = true;
  while (j < arr.length) {
    if (initialDiff !== arr[j] - arr[i]) {
      equalDiff = false;
      break;
    }
    j++;
    i++;
  }
  return equalDiff;
};
