/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
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
};
