/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  /**
   * 解法1：暴力遍历-forEach
   * extraCandies与candie[i]求和之后，若sum >= max(candies, sum)为true
   */
  let results = [];
  candies.forEach((candy, _index, arr) => {
    const sum = candy + extraCandies;
    const result = sum >= Math.max.apply(null, arr);
    results.push(result);
  });
  return results;
  /**
   * 解法1: 暴力遍历-reduce
   */
  return candies.reduce((acc, cur) => {
    acc.push(cur + extraCandies >= Math.max.apply(null, candies));
    return acc;
  }, []);
};
