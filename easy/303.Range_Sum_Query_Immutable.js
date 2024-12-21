// 暴力解法(查询时的时间复杂度：O(n))
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let sum = 0;
  for (; i <= j; i++) {
    sum += this.nums[i];
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// 前缀和解法(查询时的时间复杂度：O(1))
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.preSum = [0];
  for (let i = 0; i < nums.length; i++) {
      this.preSum[i + 1] = this.preSum[i] + nums[i]
  }
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left]
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/