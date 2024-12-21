/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  /**
   * 思路：栈
   */
  let i = 1;
  let str = "1";
  let stack = [];
  while (i < n) {
    stack = str.split("");
    str = "";
    let cur = stack[0],
      count = 0;
    while (stack.length > 0) {
      const bottom = stack.shift();
      if (cur === bottom) {
        count++;
      } else {
        str = str + `${count}${cur}`;
        cur = bottom;
        count = 1;
      }
    }
    str = str + `${count}${cur}`;
    i++;
  }
  return str;
};
