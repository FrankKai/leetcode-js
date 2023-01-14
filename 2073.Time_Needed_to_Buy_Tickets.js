/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  // 依次减1，直到k位置为0
  let seconds = 0;
  let i = 0;
  while (i < tickets.length) {
    if (tickets[i] > 0) {
      tickets[i] = tickets[i] - 1;
      seconds++;
    }
    if (tickets[k] === 0) {
      return seconds;
    }
    if (tickets[k] !== 0 && i === tickets.length - 1) {
      i = 0;
      continue;
    }
    i++;
  }
  return seconds;
};
