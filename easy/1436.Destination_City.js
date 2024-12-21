/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  /**
   * 思路：
   * 终点站特点：
   * 1.出现次数为1
   * 2.索引为奇数
   */
  const arr = paths.flat();
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!countObj[arr[i]]) {
      countObj[arr[i]] = { count: 1, index: i, num: arr[i] };
    } else {
      countObj[arr[i]].count++;
    }
  }
  const result = Object.values(countObj).find(
    (item) => item.count === 1 && item.index % 2 === 1
  ).num;
  return result;
};
