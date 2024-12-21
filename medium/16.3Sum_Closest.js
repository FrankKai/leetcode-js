/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let minLen = Infinity;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        for (let k = j+1; k < nums.length; k++) {
          if (i !== j && i !== k && j !== k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(sum - target) < minLen) {
              minLen = Math.abs(sum - target);
              result = sum;
            }
          }
        }
      }
    }
    return result;
  };