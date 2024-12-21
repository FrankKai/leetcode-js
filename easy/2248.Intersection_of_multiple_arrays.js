/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    const res = [];
    // nums.sort((x, y) => x.length - y.length);ß
    const shortest = nums.shift();
    for (const num of shortest) {
      if (nums.every((arr) => arr.includes(num))) {
        res.push(num);
      }
    }
    res.sort((x, y) => x - y);
    return res;
  };