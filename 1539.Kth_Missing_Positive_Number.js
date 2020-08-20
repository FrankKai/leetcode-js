/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 1;
  const all = new Array(arr[arr.length - 1] + k).fill(1);
  all.forEach((num, i, arr) => (arr[i] = num + i));
  for (const num of arr) {
    all.splice(all.indexOf(num), 1);
  }
  const result = all[k - 1];
  return result;
};
