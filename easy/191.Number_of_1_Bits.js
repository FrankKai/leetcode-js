/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  /**
   * 解法1：filter
   * 性能：112ms 34.8MB
   */
  let strArr = n.toString(2).split("");
  let filterArr = strArr.filter((item) => item === "1");
  let result = filterArr.length;
  return result;
  /**解法2：Map
   * 性能：112ms 35.5MB
   * */
  let strArr = n.toString(2).split("");
  let map = new Map();
  strArr.forEach((num) => {
    if (num === "1") {
      if (!map.has(num)) {
        map.set(num, num);
      } else {
        map.set(num, parseInt(map.get(num)) + 1);
      }
    }
  });
  return map.get("1") || 0;
  /**
   * 解法3：count
   * 性能：104ms 34.8MB
   */
  let strArr = n.toString(2).split("");
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "1") count++;
  }
  return count;
  /**解法4：排序优化count
   * 性能：88ms 35.7MB
   */
  let strArr = n.toString(2).split("");
  strArr.sort((a, b) => parseInt(b) - parseInt(a));
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "1") count++;
  }
  return count;
};
