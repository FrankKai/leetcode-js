/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    let result = true
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums[i] % 2 === nums[i + 1] % 2) {
                result = false;
                break;
            }
        } else if (i === nums.length - 1) {
            if (nums[i] % 2 === nums[i - 1] % 2) {
                result = false;
                break;
            }
        } else {
            if (nums[i] % 2 === nums[i - 1] % 2 || nums[i] % 2 === nums[i + 1] % 2) {
                result = false;
                break;
            }
        }
    }
    return result;
};