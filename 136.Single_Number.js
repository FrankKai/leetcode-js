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
  /** 解法2：Set 首次出现add 二次出现delete
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
   * 解法3： Obj in为false时添加 in为true时移除
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
};
