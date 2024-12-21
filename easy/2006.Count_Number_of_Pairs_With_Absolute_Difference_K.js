/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let i = 0;
    let j = 1;
    let count = 0;
    while (j < nums.length) {
        if (Math.abs(nums[i] - nums[j]) === k) {
            count++
        } 
        j++;
        if (j === nums.length) {
            i += 1;
            j = i + 1;
        }
    }
    return count;
};