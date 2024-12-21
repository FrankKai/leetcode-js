/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
  /**
   * 思路：
   * 1.构造降序排名数组
   * 2.构造降序排名分数映射
   * 3.根据降序排名分数映射为原始成绩排名
   */
  const cloneNums = [...nums];
  cloneNums.sort((x, y) => y - x);
  const ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  let i = 3;
  while (i < cloneNums.length) {
    ranks.push(`${i + 1}`);
    i++;
  }
  const obj = {};
  for (let i = 0; i < cloneNums.length; i++) {
    obj[cloneNums[i]] = ranks[i];
  }
  const result = nums.reduce((acc, num) => {
    acc.push(obj[num]);
    return acc;
  }, []);
  return result;
};
