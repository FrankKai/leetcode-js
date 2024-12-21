/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // []
  if (strs.length === 0) return "";
  // ['foo']
  if (strs.length === 1) return strs[0];
  // deal with the case: ['fooc', 'foo']
  var sortArr = strs.sort();
  var lengths = sortArr.map(str => str.length);
  var minLength = Math.min.apply(null, lengths);
  var baseStr = sortArr.find(item => item.length === minLength);

  var result = "";
  for (var m = 0; m < minLength; m++) {
    // baseStr f l o w
    for (var n = 0; n < sortArr.length; n++) {
      // 00 f 10 f 20 f f ✅
      // 01 l 11 l 21 l l ✅
      // 02 o 12 o 22 i o ❌
      if (sortArr[n][m] !== baseStr[m]) {
        // return result , can not use `break;`
        return result;
      }
      if (n === sortArr.length - 1) {
        result += baseStr[m];
      }
    }
  }
  return result;
};
