/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function (arr, k) {
  const uniq = [];
  const dup = new Set();
  let i = 0;
  while (i < arr.length) {
    if (!arr.slice(i + 1).includes(arr[i]) && !dup.has(arr[i])) {
      uniq.push(arr[i]);
    } else {
      dup.add(arr[i]);
    }
    i++;
  }
  console.log(uniq);
  return uniq[k - 1] || "";
};