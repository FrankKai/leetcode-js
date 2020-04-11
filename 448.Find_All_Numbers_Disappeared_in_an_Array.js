/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  /**
   * 解法1：辅助数组
   * 性能：7720 ms 45.6 MB
   * 时间复杂度：O(N^2)
   */
  // var helper = Array(nums.length).fill(1).map((item, i) => item + i);
  // var result = []
  // for (var i = 0; i < nums.length; i++) {
  //     if (nums.indexOf(helper[i]) === -1) {
  //         result.push(helper[i]);
  //     }
  // }
  // return result;
  /**
   * 解法2：比较值与index
   * 性能：7780ms 44.4MB
   * 时间复杂度：O(N^2)
   */
  // var result = []
  // for (var i = 1; i <= nums.length; i++) {
  //     if (nums.indexOf(i) === -1) {
  //         result.push(i);
  //     }
  // }
  // return result;

  /**
   * 解法3：Set
   * 描述：类似HashMap，仅仅多消耗1MB的内存，计算速度比Array.prototype.includes快50倍
   * 性能：156ms 53.5MB
   * 时间复杂度：O(N)
   * 空间复杂度：O(N)
   */
  var numsSet = new Set(nums);
  var result = [];
  for (var i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      result.push(i);
    }
  }
  return result;
};
