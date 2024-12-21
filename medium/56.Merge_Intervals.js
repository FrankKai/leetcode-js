/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /**
   * 解法1：排序 + 栈
   * 性能：88ms 36.3MB
   * 思路：
   * 推入区间 空栈 或者 arr[0]大于栈最后一个区间闭
   * 覆盖重叠 arr[0]小于栈最后一个区间闭
   *  */
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [];
  for (let i = 0; i < intervals.length; i++) {
    let currrentInterval = intervals[i];
    let stackLastItem = stack[stack.length - 1];
    if (stack.length === 0 || currrentInterval[0] > stackLastItem[1]) {
      stack.push(currrentInterval);
    } else if (currrentInterval[0] <= stackLastItem[1]) {
      stackLastItem[1] = Math.max(stackLastItem[1], currrentInterval[1]);
    }
  }
  return stack;
};
