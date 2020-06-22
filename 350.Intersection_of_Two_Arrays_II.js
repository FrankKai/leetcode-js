/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  /**
   * 解法：Map大法
   */
  const count = (arr) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], 1);
      } else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }
    return map;
  };
  const nums1Map = count(nums1);
  const nums2Map = count(nums2);
  const minMap =
    nums1Map.size === Math.min(nums1Map.size, nums2Map.size)
      ? nums1Map
      : nums2Map;
  const result = [];
  for (const [key] of minMap) {
    if (nums1Map.has(key) && nums2Map.has(key)) {
      let i = Math.min(nums1Map.get(key), nums2Map.get(key));
      while (i > 0) {
        result.push(key);
        i--;
      }
    }
  }
  return result;
};
