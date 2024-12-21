/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  const binary = `${num.toString(2)}`.split("");
  if (binary.length % 2 === 1) {
    binary.unshift("0");
  }
  let i = binary.length - 1;
  let j = binary.length - 2;
  while (j >= 0) {
    const temp = binary[i];
    binary[i] = binary[j];
    binary[j] = temp;
    i -= 2;
    j -= 2;
  }
  const result = parseInt(binary.join(""), 2);
  return result;
};
