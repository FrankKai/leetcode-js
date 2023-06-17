/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  // 相邻偶数移动消耗为0，相邻奇数移动消耗为0
  // 最终的消耗数量，相当于把所有偶数移动到同一位置，所有奇数移动到同一位置，然后比较出最小值，即为最小的移动数量
  // 注意：是第i个位置的position值的奇偶性
  let even = 0;
  let odd = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(even, odd);
};
