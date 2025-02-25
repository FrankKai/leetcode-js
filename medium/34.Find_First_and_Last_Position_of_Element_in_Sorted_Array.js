/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * 解法1：线性扫描法
   * 时间复杂度：O(n)
   */
  let result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (result[0] === -1 && nums[i] === target) {
      result[0] = i;
    }
    if (nums[i] === target) {
      result[1] = i;
    }
  }
  return result;


};

// 解法2：O(logn)
var searchRange = function(nums, target) {
    // 查找左边界（第一个出现的位置）
    function findLeft(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1; // 继续向左查找
            }
        }
        return left;
    }

    // 查找右边界（最后一个出现的位置）
    function findRight(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1; // 继续向右查找
            } else {
                right = mid - 1;
            }
        }
        return right;
    }

    let leftIndex = findLeft(nums, target);
    let rightIndex = findRight(nums, target);

    // 检查是否存在 target
    if (leftIndex <= rightIndex && nums[leftIndex] === target && nums[rightIndex] === target) {
        return [leftIndex, rightIndex];
    }
    return [-1, -1];
};

// 示例
console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]
console.log(searchRange([], 0));             // [-1,-1]
