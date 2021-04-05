/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let first = "a";
  let second = "1";
  const map = {
    a1: false,
    a2: true,
    b1: true,
    b2: false,
  };
  if (!["a", "c", "e", "g"].includes(coordinates[0])) {
    first = "b";
  }
  if (parseInt(coordinates[1]) % 2 == 0) {
    second = "2";
  }
  return map[first + second];
};
