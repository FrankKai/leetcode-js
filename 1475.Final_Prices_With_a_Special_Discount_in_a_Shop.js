/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let i = 0;
  let j = 1;
  const result = [];
  while (j < prices.length) {
    if (prices[j] <= prices[i]) {
      result.push(prices[i] - prices[j]);
      i++;
      j = i + 1;
      continue;
    }
    if (j === prices.length - 1) {
      result.push(prices[i]);
      i++;
      j = i + 1;
      continue;
    }
    j++;
  }
  result.push(prices[prices.length - 1]);
  return result;
};
