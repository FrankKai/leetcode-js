/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  /**
   * 思路：
   * 统计字母
   * 取最小整除结果
   * 注意：
   * 字符完全不存在
   * 字符存在但是数目不够
   */
  const count = {};
  for (const char of text) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  const refers = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };
  const divides = [];
  let result = 0;
  for (const [referKey, referValue] of Object.entries(refers)) {
    if (!count[referKey]) {
      return result;
    }
    const divide = Math.floor(count[referKey] / referValue);
    if (divide === 0) {
      return result;
    }
    divides.push(divide);
  }
  result = Math.min(...divides);
  return result;
};
