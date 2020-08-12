/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const map = [
    null,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let marks = [];
  while (n !== 0) {
    if (n <= 26) {
      marks.unshift(n);
      break;
    }
    const r = n % 26;
    if (r === 0) {
      marks.unshift(26);
      n = Math.floor(n / 26) - 1;
    } else {
      marks.unshift(r);
      n = Math.floor(n / 26);
    }
  }
  let name = "";
  for (const mark of marks) {
    name += map[mark];
  }
  return name;
};
