/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  /** 解法1：暴力遍历
   *  性能：704ms 40.5MB
   */
  let numsSet = Array.from(new Set(nums));
  let numsMap = numsSet.map((num) => ({
    num,
    count: 0,
  }));
  nums.forEach((num, i) => {
    numsMap.forEach((numM, j) => {
      if (numM.num === num) {
        numM.count++;
      }
    });
  });
  let filterArr = numsMap.filter((num) => num.count === 1);
  return filterArr[0].num;
  /** 解法2：Set
   *  思路：首次出现add 二次出现delete
   *  性能: 72 ms 38MB
   */
  let numsSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i])) {
      numsSet.add(nums[i]);
    } else {
      numsSet.delete(nums[i]);
    }
  }
  return [...numsSet][0];
  /**
   * 解法3：in
   * 思路：Obj in为false时添加 in为true时移除
   * 性能：92ms 37MB
   */
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in numsObj)) {
      numsObj[nums[i]] = nums[i];
    } else {
      delete numsObj[nums[i]];
    }
  }
  return Object.keys(numsObj)[0];
  /**解法4：Map
   * 思路：统计出现次数，比Set可用性更强
   * 性能：72ms 38MB
   */
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap.has(nums[i])) {
      numsMap.set(nums[i], 1);
    } else {
      numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    }
  }
  for (let [key, value] of numsMap) {
    if (value === 1) {
      return key;
    }
  }
  /**解法5：reduce
   * 性能：80ms 37.1MB
   */
  let countedNums = nums.reduce((acc, cur) => {
    if (!(cur in acc)) {
      acc[cur] = 1;
    } else {
      delete acc[cur];
    }
    return acc;
  }, {});
  return Object.keys(countedNums)[0];
  /**
   * 解法6：排序
   */
  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};
