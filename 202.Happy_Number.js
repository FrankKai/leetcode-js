/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n == 1) return true;

  try {
    function quadratic(num) {
      return Math.pow(parseInt(num), 2);
    }
    var nextNum = -999;
    if (`${n}`.length === 1) {
      // 7 true, 2 false
      nextNum = quadratic(n);
    } else {
      // 19 true, 78 false
      nextNum = `${n}`
        .split("")
        .map(quadratic)
        .reduce((acc, cur) => acc + cur);
    }
    while (nextNum !== 1) {
      // 递归(理解了递归，可用于理解21题单链表的递归解法）
      nextNum = isHappy(nextNum);
      return nextNum;
    }
    return nextNum === 1;
  } catch (err) {
    // 一直循环的非快乐数会抛出异常
    return false;
  }
};
