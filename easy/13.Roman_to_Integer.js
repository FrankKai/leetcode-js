/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romanMap = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var result = 0;
  for (var i = 0; i < s.length; ) {
    if (s.substring(i, i + 2) in romanMap) {
      result += romanMap[s.substring(i, i + 2)];
      i += 2;
    } else {
      result += romanMap[s.substring(i, i + 1)];
      i++;
    }
  }
  if (result >= 1 && result <= 3999) {
    return result;
  }
};
