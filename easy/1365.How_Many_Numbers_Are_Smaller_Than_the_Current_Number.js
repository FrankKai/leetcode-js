/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let i = 0;
  const result = [];
  while (i < nums.length) {
    const arr = nums.filter((fnum, fi) => fi !== i && fnum < nums[i]);
    result.push(arr.length);
    i++;
  }
  return result;
};
