/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  /**
   * 特别需要注意的点：这道题会检查nums1数组内存空间最后的存储情况
   */
  // splice截断数组
  nums1.splice(m);
  nums2.splice(n);
  // 未使用concat的原因：concat返回一个新数组，而题目需要直接在nums1的空间进行存储
  nums2.forEach(num2 => {
    nums1.push(num2);
  });
  // sort排序当前数组
  var ascArr = nums1.sort((a, b) => a - b);
  return ascArr;
};
