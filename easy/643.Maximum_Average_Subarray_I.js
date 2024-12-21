/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // 滑动窗口，窗口大小为4
    let max = -Infinity;
    let i = 0;
    let lastSum = -Infinity;
    while (i <= nums.length - k) {
        if (lastSum === -Infinity) {
            lastSum = nums.slice(i, i + k).reduce((acc, cur) => acc + cur, 0)
        } else {
            lastSum += nums[i + k - 1];
        }
        if (lastSum > max) {
            max = lastSum;
        }
        lastSum -= nums[i];
        i++;
    }
    return max / k;
};