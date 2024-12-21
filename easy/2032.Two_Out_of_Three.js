/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const numsSet = new Set([...nums1, ...nums2, ...nums3]);
  const res = new Set();
  for (const item of numsSet) {
    let count = 0;
    if (nums1.includes(item)) {
      count++;
    }
    if (nums2.includes(item)) {
      count++;
    }
    if (nums3.includes(item)) {
      count++;
    }
    if (count >= 2) {
      res.add(item);
    }
  }
  return [...res];
};