/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const stack = [];
  let i = 1;
  while (i <= nums.length - 1) {
    const [freq, val] = [nums[i - 1], nums[i]];
    const vals = new Array(freq).fill(val);
    stack.push(vals);
    i += 2;
  }
  const result = stack.flat();
  return result;
};
