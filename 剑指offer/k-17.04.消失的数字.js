/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /**解法1 */
  const n = nums.length;
  let sumN = 0;
  for (let i = 0; i <= n; i++) {
    sumN += i;
  }
  const sumNums = nums.reduce((acc, cur) => acc + cur);
  const result = sumN - sumNums;
  return result;
  /**解法2 */
  let sumN = 0;
  let sumNums = 0;
  for (let i = 0; i < nums.length; i++) {
    sumN += i;
    sumNums += nums[i];
  }
  sumN += nums.length;
  const result = sumN - sumNums;
  return result;
};
