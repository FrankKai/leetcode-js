/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let bonus = true;
  let aCount = 0;
  let lCount = 0;
  for (const record of s) {
    // 超过一个'A'(缺勤)
    if (record === "A") {
      aCount++;
    }
    if (aCount > 1) {
      bonus = false;
      break;
    }
    // 不超过两个连续的'L'(迟到)
    if (record !== "L") {
      lCount = 0;
    } else {
      lCount++;
    }
    if (lCount > 2) {
      bonus = false;
      break;
    }
  }
  return bonus;
};
