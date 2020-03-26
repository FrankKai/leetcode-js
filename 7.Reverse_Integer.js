/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var sign = Math.sign(x);
  var rX = parseInt(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  var result = sign * rX;
  var min = -Math.pow(2, 31);
  var max = Math.pow(2, 31) - 1;
  if (rX < min || rX > max) return 0;
  return result;
};
