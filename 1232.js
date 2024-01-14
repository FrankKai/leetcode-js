/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  // 依次判断斜率是否相等 y2-y2/x2-x1
  let incline = "Invalid";
  let isAllXSame = false;
  for (let i = 0; i < coordinates.length - 1; i++) {
    // 横坐标相同的点需要特殊处理
    if (coordinates[i + 1][0] - coordinates[i][0] === 0) {
      isAllXSame = true; // 只要出现过一次横坐标相同的，就置为true
    }
    const curIncline = isAllXSame
      ? coordinates[i + 1][0] - coordinates[i][0]
      : (coordinates[i + 1][1] - coordinates[i][1]) /
        (coordinates[i + 1][0] - coordinates[i][0]);

    if (incline === "Invalid") {
      incline = curIncline;
      continue;
    }
    if (curIncline !== incline) {
      return false;
    }
  }
  return true;
};
