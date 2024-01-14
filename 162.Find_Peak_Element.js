// 解法1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let idx = 0;
    nums[-1] = -Infinity;
    nums[nums.length] = -Infinity;
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] > nums[i-1] && nums[i] > nums[i + 1]) {
            idx = i;
            break;
        }
    }
    return idx;
};

// 解法2
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let idx = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[idx]) {
            idx = i;
        }
    }
    return idx;
};
