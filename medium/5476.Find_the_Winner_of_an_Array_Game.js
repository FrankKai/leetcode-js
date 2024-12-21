/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let winnerCount = 0;
  let winnerNumber = 0;
  const maxNumber = Math.max(...arr);
  while (winnerCount < k) {
    const first = arr.shift();
    const second = arr.shift();
    const max = Math.max(first, second);
    if (winnerNumber !== max) {
      winnerCount = 0;
    }
    winnerCount++;
    winnerNumber = max;
    if (max === first) {
      arr.push(second);
      arr.unshift(first);
    } else {
      arr.push(first);
      arr.unshift(second);
    }
    if (maxNumber === winnerNumber) break;
  }
  return winnerNumber;
};
