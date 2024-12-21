/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  /**
   * 反转：reverse
   * 取反：0->1 1->0
   */
  A.forEach((item) => {
    item.reverse();
    item.forEach((num, i, arr) => {
      arr[i] = num === 0 ? 1 : 0;
    });
  });
  return A;
};
