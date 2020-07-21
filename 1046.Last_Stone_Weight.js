/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((x, y) => x - y);
  while (stones.length >= 2) {
    const stonePop = stones.pop();
    const stoneBottom = stones.pop();
    if (stoneBottom === stonePop) {
      continue;
    }
    if (stoneBottom < stonePop) {
      stones.push(stonePop - stoneBottom);
      stones.sort((x, y) => x - y);
    }
  }
  return stones[0] || 0;
};
