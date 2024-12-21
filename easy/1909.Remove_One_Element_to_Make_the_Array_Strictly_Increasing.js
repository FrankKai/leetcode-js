/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    if (isAscending[nums]) {
      return true;
    }
    for (let i = 0; i < nums.length; i++) {
      if (isAscending(nums.filter((_, idx) => idx !== i))) {
        return true;
      }
    }
    return false;
    function isAscending(nums) {
      return nums.every((num, idx, arr) => {
        if (idx == 0) {
          return true;
        } else {
          return num > arr[idx - 1];
        }
      });
    }
  };