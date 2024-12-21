/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0;
  let y = 0;
  const records = [[x, y]];
  let result = false;

  for (const direction of path) {
    if (direction === "N") {
      y++;
    }
    if (direction === "S") {
      y--;
    }
    if (direction === "E") {
      x++;
    }
    if (direction === "W") {
      x--;
    }
    if (records.find((record) => record[0] === x && record[1] === y)) {
      result = true;
      break;
    }
    records.push([x, y]);
  }
  return result;
};
