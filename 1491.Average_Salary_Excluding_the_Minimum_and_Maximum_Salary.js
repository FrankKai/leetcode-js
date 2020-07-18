/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  /**
   * 解法1：排序
   */
  salary.sort((x, y) => x - y);
  salary.pop();
  salary.shift();
  const sum = salary.reduce((acc, cur) => acc + cur);
  const average = sum / salary.length;
  return average;
  /**
   * 解法2：辅助数组
   */
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    if (min === -Infinity || salary[i] < min) {
      min = salary[i];
    }
    if (max === Infinity || salary[i] > max) {
      max = salary[i];
    }
    sum += salary[i];
  }
  const result = (sum - min - max) / (salary.length - 2);
  return result;
};
