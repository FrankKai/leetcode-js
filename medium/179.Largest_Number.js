/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
      return `${b}${a}`.localeCompare(`${a}${b}`)
    });
    if (nums[0] === 0) {
      return "0";
    }
    return nums.join("");
  };