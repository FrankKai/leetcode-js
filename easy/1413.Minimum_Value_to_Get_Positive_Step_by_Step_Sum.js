/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  /**
   * 思路：
   * 1.记录累加和
   * 2.找到最小值min
   * startValue + min >= 1 => startValue = 1 - min
   */
  let startValue = 0;
  const reduceResult = nums.reduce((acc, num) => {
    const sum = startValue + num;
    acc.push(sum);
    startValue = sum;
    return acc;
  }, []);
  const min = Math.min(...reduceResult);
  startValue = 1 - min > 0 ? 1 - min : 1;
  return startValue;
};
