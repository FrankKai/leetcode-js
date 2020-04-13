/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 解法1：对撞指针法
   * 性能：64ms 35.6MB
   * */
  var head = 0;
  var tail = height.length - 1;
  var maxCapacity = 0;
  while (head < tail) {
      maxCapacity = Math.max(Math.min(height[head], height[tail]) * (tail - head), maxCapacity)
      if (height[head] < height[tail]) {
          head++
      } else {
          tail--;
      }
  }
  return maxCapacity;
  /**
   * 解法2：快慢指针法（暴力遍历法）
   * 性能：788ms 35.7MB
   */
  var maxCapacity = 0;
  for (var slow = 0; slow < height.length; slow++) {
    for (var fast = slow + 1; fast < height.length; fast++) {
      maxCapacity = Math.max(
        Math.min(height[slow], height[fast]) * (fast - slow),
        maxCapacity
      );
    }
  }
  return maxCapacity;
};
