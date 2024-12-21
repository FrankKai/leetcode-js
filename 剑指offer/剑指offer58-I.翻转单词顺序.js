/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
   * 解法1:数组
   */
  const arr = s.split(" ").filter((word) => word);
  arr.reverse();
  const result = arr.join(" ");
  return result;
  /**
   * 解法2:字符串拼接
   */
  let result = "";
  let str = "";
  for (const word of s) {
    if (word === " ") {
      result = result ? `${str ? str + " " : str}${result}` : `${str}`;
      str = "";
    } else {
      str += word;
    }
  }
  result = result ? `${str ? str + " " : str}${result}` : `${str}`;
  return result;
};
