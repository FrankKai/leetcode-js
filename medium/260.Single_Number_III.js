/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const uniqNums = new Set();
  let result = [];
  for (const num of nums) {
    if (uniqNums.has(num)) {
      result = result.filter((inum) => inum !== num);
      continue;
    }
    uniqNums.add(num);
    result.push(num);
  }
  return result;
};
