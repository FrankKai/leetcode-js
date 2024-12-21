/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length <= 2) return -1
    nums.sort((x, y) => x - y)
    // [min, max] Math.floor(Math.random() * (max - min)) + min
    const randomIndex = Math.floor(Math.random() * ((nums.length - 1) - 1)) + 1;
    return nums[randomIndex]
};