/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  /**
   * 注意点：
   * 无需做n^2的遍历，否则会导致超出时间限制
   * 依次右移指针即可
   */
  let i = 0;
  let j = 1;
  let min = -Infinity;
  let stash = [];
  arr.sort((x, y) => x - y);
  while (j < arr.length) {
    const diff = arr[j] - arr[i];
    if (min === -Infinity || diff < min) {
      min = diff;
      stash = [];
    }
    if (diff === min) {
      stash.push([arr[i], arr[j]]);
    }
    i++;
    j++;
  }
  return stash;
};
