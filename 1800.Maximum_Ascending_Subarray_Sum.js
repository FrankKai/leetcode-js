/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let result = 0;
    let i = 0;
    let arr = [];
    while (i < nums.length) {
      if (arr.length === 0 || nums[i] > nums[i - 1]) {
        arr.push(nums[i]);
      } else {
        const sum = arr.reduce((acc, cur) => acc + cur);
        if (sum > result) {
          result = sum;
        }
        arr = [nums[i]];
      }
      i++;
    }
    if (arr.length > 0) {
      const sum = arr.reduce((acc, cur) => acc + cur);
      if (sum > result) {
        result = sum;
      }
    }
  
    return result;
  };