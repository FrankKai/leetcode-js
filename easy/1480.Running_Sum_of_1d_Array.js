/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  /**
   * 解法1：reduce 初始值为空数组
   */
  return nums.reduce((acc, cur) => {
    const prevSum = acc.length - 1 >= 0 ? acc[acc.length - 1] : 0;
    const nextSum = prevSum + cur;
    return [...acc, nextSum];
  }, []);
  /**
   * 解法2：reduce 初始值为0
   */
  nums.reduce((acc, cur, idx) => {
    const sum = acc + cur;
    nums[idx] = sum;
    return sum;
  }, 0);
  return nums;
  /**
   * 解法3：纯循环式 不调用js高级函数reduce
   */
  const result = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    let j = i;
    let sum = 0;
    while (j >= 0) {
      sum += nums[j];
      j--;
    }
    result.push(sum);
  }
  return result;
};
