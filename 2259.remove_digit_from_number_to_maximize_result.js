/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    // 求最大值
    let max = -Infinity;
    for (let i = 0; i < number.length; i++) {
      if (digit === number[i]) {
        const num = number.slice(0, i) + number.slice(i+1, number.length);
        if (BigInt(num) > max) {
          max = BigInt(num);
        }
      }
    }
    return `${max}`;
  };