/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    // 最大奇数：一定是自左往右长度最长的字符串，依次尾遍历找奇数即可
    for (let i = num.length - 1; i >= 0; i--) {
      if (num[i] % 2 === 1) {
        return num.slice(0, i + 1);
      }
    }
    return "";
  };