/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  /**
   * 解法：HashMap
   */
  if (nums.length <= 1) return false;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const getNumsI = map.get(nums[i]);
    if (getNumsI) {
      getNumsI.push(i);
      map.set(nums[i], getNumsI);
    } else {
      map.set(nums[i], [i]);
    }
  }
  for (const [_, subNums] of map) {
    let i = 0;
    let j = 1;
    while (j < subNums.length) {
      const distance = Math.abs(subNums[i] - subNums[j]);
      if (distance > 0 && distance <= k) return true;
      j++;
      if (j === subNums.length) {
        i++;
        j = i + 1;
      }
    }
  }
  return false;
};
