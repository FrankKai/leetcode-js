/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let str = "";
  while (n > 0) {
    str = (n % k) + str;
    n = Math.floor(n / k);
  }
  const sum = str.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum;
};
