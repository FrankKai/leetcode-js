/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  function sortStr(str) {
    return str.split("").sort().join("");
  }
  return sortStr(s1) === sortStr(s2);
};
