/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 买入
   * 卖出
   */
  if (prices.length === 1) return 0;
  let buy = -Infinity;
  let sale = Infinity;
  const profits = [];
  let i = 0;
  while (i < prices.length) {
    if (i !== prices.length - 1) {
      if (buy === -Infinity || prices[i] < buy) {
        buy = prices[i];
        sale = prices[i];
      }
    }
    if (prices[i] > buy) {
      if (sale === Infinity || prices[i] > sale) {
        sale = prices[i];
      }
    }
    if (sale - buy > 0) profits.push(sale - buy);
    i++;
  }
  const max = Math.max(...[...profits, 0]);
  return max;
};
