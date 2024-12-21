/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 思路：
 * 1.创建一个二维数组，横向为x，纵向为y
 * 2.记录上一个点的坐标
 * 3.从拐点处开始区分: 记录方向
 * 假设为3行，依次为
 * (0,0)     (2,0)     (4,0)
 * (0,1)(1,1)(2,1)(3,1)(4,1)
 * (0,2)     (2,2)     (4,2)
 */
var convert = function (s, numRows) {
  const arr = [];
  let position = [0, 0];
  let direction = "south"; // 'north'
  for (const item of s) {
    x = position[0];
    y = position[1];
    arr[y] = (arr[y] || "") + item;
    if (y === 0) {
      direction = "south";
    } else if (y === numRows - 1) {
      direction = "north";
    }
    if (direction === "south") {
      y++;
      position[1] = y;
    }
    if (direction === "north") {
      x++;
      y--;
      position[0] = x;
      position[1] = y;
    }
  }
  const result = arr.join("");
  return result;
};
