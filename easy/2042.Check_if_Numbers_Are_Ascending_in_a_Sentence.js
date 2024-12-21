/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const arr = s.split(" ").filter((item) => !isNaN(item));
  /// 单调递增，双指针判断
  let i = 0;
  let j = i + 1;
  let asc = true;
  while (i < arr.length - 1) {
    if (parseInt(arr[i])>= parseInt(arr[j])) {
      asc = false;
      break;
    }
    i++;
    j = i+1;
  }
  return asc;
};