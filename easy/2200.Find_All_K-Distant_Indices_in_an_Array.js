/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    const result = new Set();
    const idxs = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == key) {
        idxs.push(i);
      }
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < idxs.length; j++) {
        if (Math.abs(i - idxs[j]) <= k) {
          result.add(i);
        }
      }
    }
    const arr = [...result];
    arr.sort((x, y) => x - y);
    return arr;
  };