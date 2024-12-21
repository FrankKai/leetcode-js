/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negativeCount = 0;
  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) negativeCount++;
  }
  const result = negativeCount % 2 === 0 ? 1 : -1;
  return result;
};
