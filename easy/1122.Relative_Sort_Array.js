/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  /**
   * 思路：
   * 1.统计arr1次数
   * 2.按照arr2出现顺序构建数组
   * 3.抹平数组
   * 4.填充缺失
   */
  const countObj = {};
  let miss = [];
  for (const num1 of arr1) {
    if (arr2.indexOf(num1) === -1) {
      miss.push(num1);
      continue;
    }
    if (!countObj[num1]) {
      countObj[num1] = 1;
    } else {
      countObj[num1]++;
    }
  }
  miss.sort((a, b) => a - b);
  let result = [];
  for (const num2 of arr2) {
    const itemArr = new Array(countObj[num2]).fill(num2);
    result = [...result, ...itemArr];
  }
  result = [...result, ...miss];
  return result;
};
