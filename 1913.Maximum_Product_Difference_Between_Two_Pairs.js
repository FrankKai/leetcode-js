/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // 取出2个最大值，2个最小值即可
    nums.sort((x, y)=> x -y);
    const len = nums.length;
    const result = (nums[len - 1] * nums[len - 2]) - (nums[1]* nums[0])
    return result
};