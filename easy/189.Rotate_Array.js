/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // 解法2 原地翻转时间复杂度为O(n) 出栈入栈的方式为O(kn)
  var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    function reverse(arr, start, end) {
      while (start <= end) {
        const temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
      }
    }
    return nums;
  };
  // 解法1
  var step = k % nums.length;
  if (step === 0) return nums;
  var spliceArr = nums.splice(-step);
  spliceArr.reverse().forEach(item => {
    nums.unshift(item);
  });
  return nums;
};
