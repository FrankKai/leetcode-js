/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  if (T.length < 1 || T.length > 30000) return false;
  /**
   * 解法1：暴力检索法 2284ms 9.48% 48.1MB 15.69%
   *  */
  var result = [];
  var copyT = Array.from(T);
  var helperIdx = 0;
  for (var i = 0; i < T.length; i++) {
    for (var j = helperIdx || 0; j < copyT.length; j++) {
      if (copyT[j] > T[i]) {
        result.push(j - i);
        helperIdx++;
        break;
      }
      if (j === copyT.length - 1) {
        result.push(0);
        helperIdx++;
      }
    }
  }
  return result;
  /**
   * 解法2：栈 + 递归 1132ms 19.96% 59.2MB 11.76%
   * 思路：
   * 1.通过shift取出栈底元素
   * 2.遍历剩余温度栈内温度
   *     若温度出现比栈底温度大者
   *         存储i+1
   *         递归进行下一次入栈
   *     若温度小于等于栈底温度
   *         若遍历到最后一个都没有出现更大的
   *              存储 0
   *              进行下一次入栈
   * 3.最后一个温度无论如何都肯定是0
   */
  var result = arguments[1] || [];
  var bottom = T.shift();
  for (var i = 0; i < T.length; i++) {
    var t = T[i];
    if (t > bottom) {
      result.push(i + 1);
      return dailyTemperatures(T, result);
    } else {
      if (i === T.length - 1) {
        result.push(0);
        return dailyTemperatures(T, result);
      }
    }
  }
  result.push(0);
  return result;
  /** 
  * 备注：可以通过构建一个stack辅助理解。但是会有性能问题，仅仅是辅助理解。
  var result = arguments[1] || [];
  // 每次递归都会清空栈
  var stack = [];
  var bottom = T.shift();
  for (var i = 0; i < T.length; i++) {
    var t = T[i];
    if (t > bottom) {
      // 结果存储当前栈的长度
      result.push(stack.length);
      return dailyTemperatures(T, result);
    } else {
      // 入栈所有小于等于栈底温度的温度
      stack.push(t);
      if (i === T.length - 1) {
        result.push(0);
        return dailyTemperatures(T, result);
      }
    }
  }
  result.push(0);
  return result;
  */
};
