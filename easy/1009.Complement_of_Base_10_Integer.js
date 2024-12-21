/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  const N2 = N.toString(2);
  let reverse = "";
  for (const char of N2) {
    if (char === "0") {
      reverse += "1";
    } else {
      reverse += "0";
    }
  }
  const result = parseInt(reverse, 2);
  return result;
};
