var minBitFlips = function (start, goal) {
  /**
   * 思路：转为二进制，补0，逐位diff统计出不同位数即可
   */
  let startStr = start.toString(2);
  let goalStr = goal.toString(2);
  const len = Math.max(startStr.length, goalStr.length);
  startStr = startStr.padStart(len, '0')
  goalStr = goalStr.padStart(len, '0')
  let count = 0;
  let i = 0;
  while (i < len) {
    if (startStr[i] !== goalStr[i]) {
      count++;
    }
    i++;
  }
  return count;
};