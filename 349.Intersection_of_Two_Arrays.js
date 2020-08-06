/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /**
   * 解法1：数组去重，最小长度数组，交集数组
   * 性能：72 ms 50.27% 34.8MB 42.22%
   */
  var set1 = new Set(nums1);
  var set2 = new Set(nums2);
  // 数组去重
  var set1Arr = Array.from(set1);
  var set2Arr = Array.from(set2);
  var minLength = Math.min(set1Arr.length, set2Arr.length);
  // 找出最小长度数组，减少遍历次数
  var iterateArr = minLength === set1Arr.length ? set1Arr : set2Arr;
  // 定义交集数组
  var crossArr = [];
  iterateArr.forEach((item) => {
    if (set1Arr.indexOf(item) !== -1 && set2Arr.indexOf(item) !== -1) {
      crossArr.push(item);
    }
  });
  return crossArr;
  /**
   * 解法2：最小长度数组，交集数组，数组去重
   * 性能：76 ms 34.72% 34 MB 88.89%
   */
  var minLength = Math.min(nums1.length, nums2.length);
  // 找出最小长度数组，减少遍历次数
  var iterateArr = minLength === nums1.length ? nums1 : nums2;
  // 定义交集数组
  var crossArr = [];
  iterateArr.forEach((item) => {
    if (nums1.indexOf(item) !== -1 && nums2.indexOf(item) !== -1) {
      crossArr.push(item);
    }
  });
  var crossArrSet = Array.from(new Set(crossArr));
  return crossArrSet;
  /**
   * 解法3
   */

  const result = [];
  while (nums1.length) {
    const pop = nums1.pop();
    if (result.indexOf(pop) !== -1) {
      continue;
    }
    if (nums2.indexOf(pop) !== -1) {
      result.push(pop);
    }
  }
  return result;
};
