/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  /**
   * 思路：
   * 抽取出非字母字符并标记其位置
   * 抽取出字母字符并反转
   * 将非字母字符插入在字母字符数组的指定位置
   */
  const sArr = S.split("");
  const marks = [];
  let pureString = [];
  const regex = /[^A-Za-z]/;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].search(regex) !== -1) {
      marks.push({
        index: i,
        sign: sArr[i],
      });
    } else {
      pureString.push(sArr[i]);
    }
  }
  const reverseString = pureString.reverse();
  for (const mark of marks) {
    reverseString.splice(mark.index, 0, mark.sign);
  }
  const result = reverseString.join("");
  return result;
};
