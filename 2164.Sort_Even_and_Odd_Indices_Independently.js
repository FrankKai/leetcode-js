/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  // 偶数 递增
  // 奇数 递减
  const even = nums.filter((_, idx) => idx % 2 === 0);
  const odd = nums.filter((_, idx) => idx % 2 === 1);
  let arr = [];
  even.sort((x, y) => x - y);
  odd.sort((x, y) => y - x);
  let i = 0;
  while (i < Math.ceil(nums.length / 2)) {
    arr.push(even[i]);
    if (odd[i]) {
      arr.push(odd[i]);
    }
    i++;
  }
  return arr;
};
