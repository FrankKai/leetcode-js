/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let map = new Map();
  let i = "A".charCodeAt();
  let j = 1;
  while (i <= "Z".charCodeAt()) {
    map.set(String.fromCharCode(i), j);
    j++;
    i++;
  }
  let k = s.length - 1;
  let orderNum = 0;
  while (k >= 0) {
    orderNum += map.get(s[k]) * Math.pow(26, s.length - 1 - k);
    k--;
  }
  return orderNum;
};
