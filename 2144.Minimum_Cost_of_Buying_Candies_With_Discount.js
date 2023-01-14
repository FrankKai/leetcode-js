/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  // [6,5,7,9,2,2]
  // 排序+栈
  cost.sort((x, y) => x - y);
  let min = 0;
  let arr = [];
  while (cost.length > 0) {
    const pop = cost.pop();
    if (arr.length === 2) {
      min += arr.reduce((acc, cur) => acc + cur);
      arr = [];
      continue;
    }
    if (arr.length < 2) {
      arr.push(pop);
    }
  }
  if (arr.length !== 0) {
    min += arr.reduce((acc, cur) => acc + cur);
  }
  return min;
};
