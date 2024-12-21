/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i == 0 || i == nums.length - 1) {
      continue;
    }
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    const unequalLeft = left.findLast((item) => item !== nums[i]);
    const unequalRight = right.find((item) => item !== nums[i]);

    if (
      (unequalLeft > nums[i] && unequalRight > nums[i]) ||
      (unequalLeft < nums[i] && unequalRight < nums[i])
    ) {
      count++;
    }
  }
  return count;
};
