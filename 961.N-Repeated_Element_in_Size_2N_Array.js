/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const N = A.length / 2;
  const countObj = {};
  for (const num of A) {
    if (!countObj[num]) {
      countObj[num] = 1;
    } else {
      countObj[num]++;
    }
    if (countObj[num] === N) return num;
  }
};
