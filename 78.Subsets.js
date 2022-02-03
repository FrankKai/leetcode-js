/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 解法1
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var subsets = function (nums) {
    const result = [[]];
    for (const num of nums) {
      result.forEach((item) => {
        result.push(item.concat(num));
      });
    }
    return result;
  };
  // 解法2
  let temp = [[]];
  let result = [[]];
  for (let i = 0; i < nums.length; i++) {
    temp = JSON.parse(JSON.stringify([...result, ...result]));
    let mid = temp.length / 2;
    let j = temp.length - 1;
    while (j >= mid) {
      temp[j].push(nums[i]);
      j--;
    }
    result = temp;
  }
  return result;
};
