/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    //  排序
    // 出栈
    nums.sort((x, y) => x - y);
    while (nums.length) {
      const first = nums.shift();
      const second = nums.shift();
      if (first !== second) {
        return false;
      }
    }
    return true;
  };