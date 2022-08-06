/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    // 找出第一个非0的单调性，后续判断是否单调一致
    if (nums.length === 1) return true;
    let sign = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      const curSign = Math.sign(nums[i] - nums[i + 1]);
      if (curSign !== 0 && sign === 0) {
        sign = curSign;
      }
      if (curSign !== 0 && curSign !== sign) {
        return false;
      }
    }
    return true;
  };