/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const queue = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      queue.push(num);
    }
    if (num % 2 === 1) {
      queue.unshift(num);
    }
  }
  return queue;
};
