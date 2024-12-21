/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  /**
   * 解法1：
   * 1.去前导零
   * 2.补后缀零
   * 3.逐位比较
   */
  const version1Arr = removePrefixZero(version1);
  const version2Arr = removePrefixZero(version2);

  attachSuffixZero(version1Arr, version2Arr);
  // 逐位比较
  let result = 0;
  while (version1Arr.length) {
    let v1 = version1Arr.shift();
    let v2 = version2Arr.shift();
    if (v1 > v2) {
      result = 1;
      break;
    } else if (v1 < v2) {
      result = -1;
      break;
    }
  }
  return result;

  // 去前导零
  function removePrefixZero(version) {
    return version.split(".").map((num) => parseInt(num));
  }
  // 补后缀零
  function attachSuffixZero(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
      if (arr1[i] === undefined) {
        arr1[i] = 0;
      }
      if (arr2[i] === undefined) {
        arr2[i] = 0;
      }
    }
  }
};
