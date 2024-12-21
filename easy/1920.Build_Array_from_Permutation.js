/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const ans = nums.map((_, i, arr)=> arr[arr[i]])
    return ans;
};