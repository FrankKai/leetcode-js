/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const num2 = num.toString(2);
  const complementArr = [];
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] === "1") {
      complementArr[i] = "0";
    } else {
      complementArr[i] = "1";
    }
  }
  const result = parseInt(complementArr.join(""), 2);
  return result;
};
