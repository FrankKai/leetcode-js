/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 常规解法：头遍历、尾遍历、indexOf、findIndex
   * 高级解法：双指针、二分查找
   */
  /**
   * 解法1：双指针法
   * 性能：76ms 37.7MB
   */
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === target) {
      return i;
    } else if (nums[j] === target) {
      return j;
    } else {
      i++;
      j--;
    }
  }
  return -1;
  /**
   * 解法2：二分查找
   * 时间复杂度: O(logn)
   * 性能：68ms 36.7MB
   * 思路：
   * 目标索引：index；左指针：i；右指针：j；中间指针：mid
   * 二分条件：
   * i<j
   * 指针移动条件：
   * 不断判断mid对应的值与target的大小：若小于右指针j左移，若大于左指针i右移。
   * 指针移动后，mid的值为 上取整(左右指针之和/2)。
   * 返回-1的条件：
   * 数组长度为1且值与target不等时。[5] 5, [5] 0
   * 数组逼近到j-i===1且与i，j对应的值与target不等时，返回-1。[0, 3] 2
   */
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let index = 0;
  let i = 0;
  let j = nums.length;
  while (i < j) {
    if (j - i === 1) {
      if (target !== nums[i] && target !== nums[j]) return -1;
    }
    let mid = Math.floor((j + i) / 2);
    if (target === nums[mid]) {
      return (index = mid);
    }
    if (target > nums[mid]) {
      i = mid;
    } else if (target < nums[mid]) {
      j = mid;
    }
  }
  /**
   * 解法3：二分查找（模板一）
   * 访问数组中的单个索引
   * 时间复杂度: O(logn)
   * 思路：
   * 初始条件：left = 0；right=length-1
   * 终止条件：left>right
   * 向右查找：left = mid + 1
   * 向左查找：right = mid -1
   */
  var search = function (nums, target) {
    if (nums.length === 1) {
      return nums[0] === target ? 0 : -1;
    }
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
      let mid = i + Math.floor((j - i) / 2);
      if (target === nums[mid]) {
        return mid;
      }
      if (target > nums[mid]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return -1;
  };
};
