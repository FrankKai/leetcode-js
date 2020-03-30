/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  /**
   * 解法1：暴力迭代 580ms
   */
  var numsMaster = nums;
  var numsSlave = nums.map(e => e);
  var idxArr = [];
  numsMaster.forEach((nm, idxm, arrm) => {
    numsSlave.forEach((ns, idxs, arrs) => {
      if (nm + ns === target && idxm < idxs) {
        idxArr.push(idxm);
        idxArr.push(idxs);
      }
    });
  });
  return idxArr;
  /**
   * 解法2：快慢指针+递归 372ms
   */
  // 慢指针
  var i = arguments[2] || 0;
  // 快指针
  var j = 1;
  for (; j < nums.length; ) {
    if (nums[j] + nums[i] === target && j !== i) {
      return [i, j];
    }
    if (nums[j] + nums[i] !== target) {
      if (j === nums.length - 1) {
        i++;
        // 递归
        return twoSum(nums, target, i);
      }
    }
    j++;
  }
};
