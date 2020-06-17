/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /**
   * 解法1：统计排序法
   */
  const obj = {};
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  // {1:3, 2:2, 3:1} => [1, 2, 3]
  // {8:2, 3:5, 2:4} => [3, 2, 8]
  const descKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  const result = descKeys.splice(0, k);
  return result;
};
