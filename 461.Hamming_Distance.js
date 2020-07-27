/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  /**
   * 解法1：普通补零法
   */
  let x2 = x.toString(2);
  let y2 = y.toString(2);
  const zeroNums = Math.abs(x2.length - y2.length);
  if (x2.length > y2.length) {
    y2 = "0".repeat(zeroNums) + y2;
  } else if (y2.length > x2.length) {
    x2 = "0".repeat(zeroNums) + x2;
  }
  let i = 0;
  let count = 0;
  while (i < x2.length) {
    if (x2.charAt(i) !== y2.charAt(i)) {
      count++;
    }
    i++;
  }
  return count;
  /**
   * 解法2：padStart()补零法
   */
  let x2 = x.toString(2).padStart(32, "0");
  let y2 = y.toString(2).padStart(32, "0");
  let i = 0;
  let count = 0;
  while (i <= 32) {
    if (x2.charAt(i) !== y2.charAt(i)) {
      count++;
    }
    i++;
  }
  return count;
};
