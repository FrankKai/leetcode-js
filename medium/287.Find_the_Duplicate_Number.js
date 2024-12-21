/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  /**
   * 解法1：obj法
   */
  const obj = {};
  let result = null;
  for (let num of nums) {
    if (!obj[num]) {
      obj[num] = true;
    } else {
      result = num;
      break;
    }
  }
  return result;
  /**
   * 解法2：Set法
   */
  const set = new Set();
  let result = null;
  for (let num of nums) {
    if (!set.has(num)) {
      set.add(num);
    } else {
      result = num;
      break;
    }
  }
  return result;
  /**
   * 解法3：Map法
   */
  const map = new Map();
  let result = null;
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, true);
    } else {
      result = num;
      break;
    }
  }
  return result;
};
