/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  for (const num of `${n}`) {
    product *= parseInt(num);
    sum += parseInt(num);
  }
  const result = product - sum;
  return result;
};
