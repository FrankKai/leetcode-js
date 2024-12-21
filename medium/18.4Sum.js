/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 基于三数之和改造
    const map = new Map();
    nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      let j = i + 1;
      let k = j + 1;
      let l = nums.length - 1;
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          const arr = [nums[i], nums[j], nums[k], nums[l]];
          map.set(arr.join("-"), arr);
          k++;
        }
        if (sum > target) {
          l--;
        }
        if (sum < target) {
          k++;
        }
        if (k >= l) {
          j++;
          k = j + 1;
          l = nums.length - 1;
        }
      }
    }
    return [...map.values()];
  };