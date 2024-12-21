/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {};
  for (const num of arr) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  const values = Object.values(obj);
  const uniqValues = new Set(values);
  const result = values.length === uniqValues.size;
  return result;
};
