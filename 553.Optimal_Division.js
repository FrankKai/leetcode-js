/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    // 分母 / 分子
    // 分母为第一个数字：固定不变。
    // 分子尽可能小：第二个数字，尽可能除其他的数字即可。因为都是正整数，除得越多，值越大。
    if(nums.length === 1) return `${nums[0]}`;
    if(nums.length === 2) return `${nums[0]}/${nums[1]}`;
    nums[1] = `(${nums[1]}`
    return `${nums.join("/")})`
};