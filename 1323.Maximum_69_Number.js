/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  /**
   * 解法1：头遍历找到第一个6变为9
   */
  let str = num.toString();
  let index = str.indexOf("6");
  if (index === -1) return num;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (index === i) {
      result += "9";
    } else {
      result += str[i];
    }
  }
  return parseFloat(result);
};
