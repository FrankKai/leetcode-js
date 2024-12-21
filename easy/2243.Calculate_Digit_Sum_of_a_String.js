/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    function sum(str) {
      return [...str].reduce((acc, cur) => parseInt(acc) + parseInt(cur), [0]);
    }
    let arr = [];
    let i = 0;
    while (s.length > k && i < s.length) {
      arr.push(s.slice(i, i + k));
      i += k;
      if (i >= s.length) {
        const newStr = arr.map((str) => sum(str)).join("");
        s = newStr;
        if (newStr.length > k) {
          arr = [];
          i = 0;
        }
      }
    }
    return s;
  };