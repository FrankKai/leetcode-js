/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    const n = Math.max.apply(null, nums);
    let i = 0;
    while (i <= n) {
      const count = nums.reduce((acc, cur) => {
        if (cur >= i) {
          acc++;
        }
        return acc;
      }, 0);
      if (count === i) return i;
      i++;
    }
    return -1;
  };