/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  if (nums.length < 2 || nums.length > 10000) return [];
  // 找出丢失的整数
  var validArr = new Array(nums.length).fill(1).map((item, i) => item + i);
  var uniqueArr = Array.from(new Set(nums));
  var missResult = [];
  validArr.forEach((vItem, vI, vArr) => {
    if (uniqueArr.indexOf(vItem) === -1) {
      missResult.push(vItem);
    }
  });
  // 找到重复的整数
  var numsCount = uniqueArr.map(value => ({ value, count: 0 }));
  nums.forEach(num => {
    numsCount.forEach(item => {
      if (item.value === num) {
        item.count++;
      }
    });
  });
  var numsCountFilter = numsCount.filter(item => item.count > 1);
  missResult.unshift(numsCountFilter[0].value);
  return missResult;
};
