/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  // 最小的组合 肯定是两两分开
  // 排序后，以前2位作为十分位，后两位作为个位
  let str = [...`${num}`].map(Number);
  str.sort((x, y) => x - y);
  const result = 10 * (str[0] + str[1]) + str[2] + str[3];
  return result;
};
