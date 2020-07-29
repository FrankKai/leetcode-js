/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  /**
   * 思路：
   *      "abcdefg"
   *      => ["abcd", "efg"]
   *      => [['a','b','c','d'],['e','f','g']]
   *      => [['b','a','c','d'],['f','e','g']]
   *      => ["bacd", "feg"]
   *      => "bacdfeg"
   */
  const split4Arr = [];
  let i = 0;
  let helper = "";
  while (i < s.length) {
    const char = s[i];
    helper += char;
    if (helper.length === 2 * k || i === s.length - 1) {
      split4Arr.push(helper);
      helper = "";
    }
    i++;
  }
  const reverseStr = [];
  for (const str of split4Arr) {
    const splitStr = str.split("");
    const frontK = splitStr.splice(0, k);
    frontK.reverse();
    const concat = [...frontK, ...splitStr].join("");
    reverseStr.push(concat);
  }
  const result = reverseStr.join("");
  return result;
};
