/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  /**
   * 解法1：取码转码
   * 利用ASCII码进行转换
   * https://en.wikipedia.org/wiki/ASCII
   * A 65 a 97
   * 利用大小写相差32位的特性，x+32后转为字符即可
   * 方法："x".charCodeAt(), String.fromCharCode()
   */
  const upperRange = { min: 65, max: 90 };
  const lowerArr = [];
  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt();
    if (code >= upperRange.min && code <= upperRange.max) {
      lowerArr.push(String.fromCharCode(code + 32));
    } else {
      lowerArr.push(str[i]);
    }
  }
  const result = lowerArr.join("");
  return result;
  /**
   * 解法2："foo".toLowerCase();
   */
  return str.toLowerCase();
};
