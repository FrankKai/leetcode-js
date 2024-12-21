/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;
  // 矩形1如果不与矩形2重叠，那么位于上方、下方、左侧和右侧
  if (y1 >= y4 || y2 <= y3 || x2 <= x3 || x1 >= x4) {
    return false;
  }
  return true;
};
