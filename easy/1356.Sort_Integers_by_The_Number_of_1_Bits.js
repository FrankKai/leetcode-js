/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  /**
   * 思路：
   */
  arr.sort((x, y) => x - y);
  const countArr = arr.map(binary1Count);
  countArr.sort((x, y) => x.count - y.count);
  const result = countArr.map((item) => item.num);
  return result;
  /**
   * 统计数字转换为二进制后数字1的数目
   */
  function binary1Count(num) {
    const str = num.toString(2);
    let count = 0;
    for (const digit of str) {
      if (digit === "1") count++;
    }
    const result = { num, count };
    return result;
  }
};
