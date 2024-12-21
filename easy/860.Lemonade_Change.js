/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  /**
   * 5 不用找零
   * 10 找零5即可
   * 20 10+5,找零5+5+5
   * 注意优先找零 10+5，否则会导致5块不够用的情况
   */
  let count = {
    5: 0,
    10: 0,
    20: 0,
  };
  for (const bill of bills) {
    if (bill === 10) {
      if (count[5] > 0) {
        count[5]--;
      } else {
        return false;
      }
    } else if (bill === 20) {
      if (count[10] > 0 && count[5] > 0) {
        count[10]--;
        count[5]--;
      } else if (count[5] >= 3) {
        count[5] -= 3;
      } else {
        return false;
      }
    }
    count[bill]++;
  }
  return true;
};
