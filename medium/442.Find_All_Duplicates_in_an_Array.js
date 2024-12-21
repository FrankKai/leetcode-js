/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  /**
   * 解法1：标记出现位置法
   * 时间复杂度：O(n)
   * 额外空间：无
   * 思路：出现过一次的标记为负数
   * [4,3,2,7,8,2,3,1]
   *  - - - -     - -
   *    + +
   */
  const result = [];
  for (const num of nums) {
    const absNum = Math.abs(num);
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] = -1 * nums[absNum - 1];
    } else {
      result.push(absNum);
    }
  }
  return result;
  /**
   * 解法2：统计法
   * 时间复杂度：O(n)
   * 额外空间：有
   */
  let obj = {};
  for (const num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === 2) result.push(key);
  }
  return result;
};
