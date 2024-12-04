/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 解法1：暴力迭代 580ms
   */
  var numsMaster = nums;
  var numsSlave = nums.map((e) => e);
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
  /**
   * 解法3：快慢指针 180ms
   */
  let i = 0;
  let j = 1;
  let num = 0;
  while (j <= nums.length - 1) {
    num = nums[i] + nums[j];
    if (num === target) {
      break;
    }
    if (j === nums.length - 1) {
      i++;
      j = i + 1;
      continue;
    }
    j++;
  }
  return [i, j];
  /**
  * 解法4：双指针
  */
  let result = [];
  let i = 0;

  while (i < nums.length - 1) {
    let j = i + 1
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        return result;
      }
      j++;
    }
    i++;
  }

  /**
  * 解法5: Map
  */
  const map = new Map();
  for(let i = 0;i<nums.length;i++){
      const num = target - nums[i]
      if(map.has(num)){
          return [map.get(num), i];
      }
      map.set(nums[i], i);
  }
};
