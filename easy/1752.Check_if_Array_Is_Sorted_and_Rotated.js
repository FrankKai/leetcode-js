/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (isAscending(nums)) {
      return true;
    } else {
      nums = [nums.pop(), ...nums];
    }
    i++;
  }
  return false;
  function isAscending(arr) {
    return arr.every((value, index, array) => {
      if (index === 0) {
        return true;
      } else {
        return value >= array[index - 1];
      }
    });
  }
};
