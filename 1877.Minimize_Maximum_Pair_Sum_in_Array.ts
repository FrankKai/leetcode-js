function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let max = -Infinity;
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        const sum = nums[i] + nums[j];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};