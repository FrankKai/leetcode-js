/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let isAsc = nums[0] <= nums[nums.length - 1];
    while (!isAsc) {
        nums = [nums.pop(), ...nums]
        isAsc = nums[0] <= nums[nums.length - 1];
    }
    return nums[0];
};