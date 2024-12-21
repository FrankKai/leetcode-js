/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  // 思路：
  // 1.统计字符和数字数组
  // 2.次数绝对值不等于1时返回”“
  // 3.等于1时，依次出栈进行拼接
  const nums = [];
  const chars = [];
  const charStart = "a".charCodeAt();
  const charEnd = "z".charCodeAt();
  const numStart = "0".charCodeAt();
  const numEnd = "9".charCodeAt();
  for (const item of s) {
    const charCode = item.charCodeAt();
    if (charCode >= charStart && charCode <= charEnd) {
      chars.push(item);
    }
    if (charCode >= numStart && charCode <= numEnd) {
      nums.push(item);
    }
  }
  if (Math.abs(nums.length - chars.length) > 1) return "";
  let str = "";
  if (nums.length > chars.length) {
    str += nums.pop();
    while (nums.length > 0 || chars.length > 0) {
      const popChar = chars.pop();
      const popNum = nums.pop();
      if (popChar) {
        str += popChar;
      }
      if (popNum) {
        str += popNum;
      }
    }
  } else {
    str += chars.pop();
    while (nums.length > 0 || chars.length > 0) {
      const popNum = nums.pop();
      const popChar = chars.pop();
      if (popNum) {
        str += popNum;
      }
      if (popChar) {
        str += popChar;
      }
    }
  }

  return str;
};
