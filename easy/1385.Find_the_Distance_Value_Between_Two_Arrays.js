/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  /**
   * 解法1：普通迭代
   */
  let count = 0;
  for (const num1 of arr1) {
    const isDistanceEnough = arr2.every((num2) => Math.abs(num1 - num2) > d);
    if (isDistanceEnough) count++;
  }
  return count;
  /**
   * 解法2：reduce
   */
  const count = arr1.reduce((acc, cur) => {
    const isDistanceEnough = arr2.every((num2) => Math.abs(cur - num2) > d);
    if (isDistanceEnough) acc++;
    return acc;
  }, 0);
  return count;
};
