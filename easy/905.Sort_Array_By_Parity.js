/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  /**
   * 栈头栈尾解法即可
   * 偶数栈底推入unshift
   * 奇数栈顶推入push
   */
  var stack = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      stack.unshift(A[i]);
    } else {
      stack.push(A[i]);
    }
  }
  return stack;
};
