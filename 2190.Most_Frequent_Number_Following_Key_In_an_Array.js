/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    // 统计次数即可
    // 在后面的数字出现的情况，包含在在前面数字出现的情况
    // 统计紧跟着key的数字即可，也就是nums[i+1]位
    const map = new Map();
    let i = 0;
    // 这里注意：遍历到倒数第2项即可。因为最后一个元素后面，没有任何元素
    while (i < nums.length - 1) {
      const item = nums[i];
      const next = nums[i + 1];
      if (item === key) {
        map.set(next, map.has(next) ? map.get(next) + 1 : 1);
      }
      i++;
    }
    let num = null;
    let max = 0;
    for (const [key, value] of map) {
      if (value > max) {
        num = key;
        max = value;
      }
    }
    return num;
  };