/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((x, y) => x - y);
  
    const result = [];
    const backtrack = (start, arr) => {
      if (
        result.find(
          (item) =>
            item.length === arr.length &&
            item.every((num, idx) => arr[idx] === num)
        )
      ) {
        return;
      }
      result.push([...arr]);
      for (let i = start; i < nums.length; i++) {
        arr.push(nums[i]);
        backtrack(i + 1, arr);
        arr.pop();
      }
    };
    backtrack(0, []);
    return result;
  };