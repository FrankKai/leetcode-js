/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = nums1.reduce((acc, num1) => {
    const position = nums2.indexOf(num1);
    const item = nums2.find((num2, idx) => idx > position && num2 > num1);
    const el = item ? item : -1;
    acc.push(el);
    return acc;
  }, []);
  return result;
};
