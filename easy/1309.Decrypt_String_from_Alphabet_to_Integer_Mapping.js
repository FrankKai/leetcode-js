/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  /**
   * "#""前面都是2位
   * 从后往前遍历
   * 拼接时机：1.带#长度为3 2.不带#
   */
  const map = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z",
  };
  let result = "";
  let i = s.length - 1;
  let str = "";
  while (i >= 0) {
    if (s[i] === "#") {
      str = "#";
    } else {
      str = s[i] + str;
    }
    if (str.length === 3) {
      result = map[str] + result;
      str = "";
    } else if (str && !str.includes("#")) {
      result = map[str] + result;
      str = "";
    }
    i--;
  }
  return result;
};
