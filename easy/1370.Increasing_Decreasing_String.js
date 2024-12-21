/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  /**
   * 正序筛选
   * 反序筛选
   * 依次进行
   */
  const sort = [];
  let nums = s
    .split("")
    .map((str) => str.charCodeAt())
    .sort((x, y) => x - y);
  let min = -Infinity;
  let max = Infinity;
  let i = 0;
  let type = "asc";
  while (nums.length > 0) {
    if (type === "asc") {
      if (nums[i] > min) {
        min = nums[i];
        sort.push(nums[i]);
        nums.splice(i, 1);
        continue;
      }
    } else if (type === "desc") {
      if (nums[i] < max) {
        max = nums[i];
        sort.push(nums[i]);
        nums.splice(i, 1);
        continue;
      }
    }
    if (i === nums.length) {
      type = type === "asc" ? "desc" : "asc";
      min = -Infinity;
      max = Infinity;
      nums.reverse();
      i = 0;
      continue;
    }
    i++;
  }
  const result = sort.map((num) => String.fromCharCode(num)).join("");
  return result;
};
