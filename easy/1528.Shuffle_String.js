/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const helper = [];
  for (let i = 0; i < s.length; i++) {
    helper[indices[i]] = s[i];
  }
  const result = helper.join("");
  return result;
};
