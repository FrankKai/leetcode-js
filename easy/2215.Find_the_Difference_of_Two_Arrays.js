/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    // 依次扫描
    const answer = [];
    answer[0] = nums1.filter((num) => !nums2.includes(num));
    answer[1] = nums2.filter((num) => !nums1.includes(num));
    answer[0] = [...new Set(answer[0])]
    answer[1] = [...new Set(answer[1])]
    return answer;
  };