/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const nums = new Array(n).fill(1).map((num, i) => num + i);
  const statisticNums = statistics(nums);
  const maxLength = Math.max(
    ...statisticNums.map((sNum) => sNum.values.length)
  );
  let count = 0;
  for (const sum of statisticNums) {
    if (sum.values.length === maxLength) count++;
  }
  return count;
  /**
   * 数位和生成函数
   * 12 => {key: 3, values: [12]}
   */
  function digitsSum(num) {
    let sum = 0;
    for (const digit of `${num}`) {
      sum += parseInt(digit);
    }
    const result = {
      key: sum,
      values: [num],
    };
    return result;
  }
  /**
   * 数位和相同统计函数
   * [
   *  {key: 1, values: [1],
   *  {key: 2, values: [2]},
   *  {key: 3, values: [3]},
   *  {key: 4, values: [4]},  => [{key: 1, values: [1, 10]},key: 2, values: [2, 11]... ]
   *  ...
   *  {key: 11, values: [2]}
   *  {key: 12, values: [3]}
   *  {key: 13, values: [4]}
   * ]
   */
  function statistics(nums) {
    const numSums = nums.reduce((acc, num) => {
      const sum = digitsSum(num);
      const numIndex = acc.findIndex((item) => item.key === sum.key);
      if (numIndex !== -1) {
        acc[numIndex].values.push(num);
        return acc;
      }
      acc.push(sum);
      return acc;
    }, []);
    return numSums;
  }
};
