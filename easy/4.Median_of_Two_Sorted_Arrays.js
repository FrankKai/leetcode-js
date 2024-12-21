/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2]
    nums.sort((x, y) => x - y)
    const isOdd = nums.length % 2
    const index = Math.floor(nums.length / 2)
    if (isOdd) {
        return nums[index]
    } else {
        return (nums[index] + nums[index - 1]) / 2
    }
};