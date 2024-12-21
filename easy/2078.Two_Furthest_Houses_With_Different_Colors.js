/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  // 快慢指针即可
  let max = -Infinity;
  let i = 0;
  while (i < colors.length - 1) {
    let j = i + 1;
    while (j <= colors.length - 1) {
      if (colors[j] !== colors[i]) {
        if (Math.abs(j - i) > max) {
          max = Math.abs(j - i);
        }
      }
      if (j === colors.length - 1) {
        i++;
        j = i + 1;
      } else {
        j++;
      }
    }
  }
  return max;
};