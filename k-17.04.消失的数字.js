/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let sumN = 0;
  for (let i = 0; i <= n; i++) {
    sumN += i;
  }
  const sumNums = nums.reduce((acc, cur) => acc + cur);
  const result = sumN - sumNums;
  return result;
};
