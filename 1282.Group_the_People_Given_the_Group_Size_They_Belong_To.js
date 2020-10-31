/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  /**
   * 相同groupSize的划分为一组
   * 对组数据做分段处理
   *  1.分几次？同组数/groupSize
   *  2.如何分段？起始坐标同时递增相同长度 .slice(j * key, (j + 1) * key)
   */
  const obj = {};
  let i = 0;
  while (i < groupSizes.length) {
    if (!obj[groupSizes[i]]) {
      obj[groupSizes[i]] = {
        count: 1,
        values: [i],
      };
    } else {
      obj[groupSizes[i]].count++;
      obj[groupSizes[i]].values.push(i);
    }
    i++;
  }
  const result = [];
  for (const [key, group] of Object.entries(obj)) {
    let j = 0;
    while (j < group.count / key) {
      result.push(group.values.slice(j * key, (j + 1) * key));
      j++;
    }
  }
  return result;
};
