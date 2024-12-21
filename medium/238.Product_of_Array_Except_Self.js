/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 计算左乘积，再计算右乘积
    const result = [];
    result[0] = 1
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1]
    }
    let R = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = R * result[i]
        R *= nums[i]
    }
    return result;
};