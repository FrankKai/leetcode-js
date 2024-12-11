/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 解法1：对撞指针法 贪心
   * 保持低柱子不动，横向距离只会越来越小，容量不会再增大。
   * */
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const capacity = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(capacity, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
  /**
   * 解法2：快慢指针法（暴力遍历法）
   */
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let j = i + 1;
    while (j < height.length) {
      const capacity = Math.min(height[i], height[j]) * (j - i);
      max = Math.max(capacity, max);
      j++;
    }
  }
  return max;
};
