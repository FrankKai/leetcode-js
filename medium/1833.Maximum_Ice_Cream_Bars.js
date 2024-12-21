/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  // 挑便宜的买，小男孩Tony从小就很会过日子
  costs.sort((x, y) => x - y);
  let head = 0;
  while (coins >= costs[head]) {
    coins -= costs[head];
    head++;
  }
  return head;
};
