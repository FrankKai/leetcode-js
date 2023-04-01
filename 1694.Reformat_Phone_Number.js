/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  const strPure = number.replace(/\ |-/g, "");
  // 直接切割，判断剩余数字，如果等于1，把上一个的分1个给它；如果2，ok。
  let i = 0;
  const strs = [];
  let len = 0;
  while (i <= strPure.length) {
    if (i > 0 && i % 3 === 0) {
      strs.push(strPure.slice(i - 3, i));
      len += 3;
    }
    i++;
  }
  if (strPure.length - len === 1) {
    let tail = strs.pop();
    strs.push(tail.slice(0, 2));
    strs.push(`${tail.slice(2, 3)}${strPure[strPure.length - 1]}`);
  }
  if (strPure.length - len === 2) {
    strs.push(strPure.slice(strPure.length - 2, strPure.length));
  }
  return strs.join("-");
};
