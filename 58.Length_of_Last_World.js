/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s) return 0;
  var splitArr = s.trim().split(" ");
  var lastItem = splitArr[splitArr.length - 1];
  return lastItem.length;
};