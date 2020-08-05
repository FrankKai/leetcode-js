/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  /**
   * 解法1：统计
   */
  const obj = {};
  for (const num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) return key;
  }
  /**
   * 解法2：排序
   */
  nums.sort();
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};
