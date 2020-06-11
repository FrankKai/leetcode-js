function maxPower(s: string): number {
  /**
   * 解法1：栈
   * 语言：TypeScript
   * 注意点：
   * 1.清空栈时 stack.length===0，也要继续循环
   * 2.入栈时 arr[0] === stack[stack.length - 1]，用arr[0]而不是arr.shift()是因为会导致进入while条件语句
   * 3.取最大长度时 通过stack.length+1与max比较，过滤出最大值
   */
  let stack = [];
  let max = 1;
  const arr = s.split("");
  while (arr.length > 0 || stack.length === 0) {
    if (stack.length === 0) {
      stack.push(arr.shift());
    } else if (arr[0] === stack[stack.length - 1]) {
      if (stack.length + 1 > max) {
        max = stack.length + 1;
      }
      stack.push(arr.shift());
    } else {
      stack = [];
    }
  }
  return max;
}
