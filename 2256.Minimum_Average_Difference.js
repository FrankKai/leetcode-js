/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
    const cache = [0, nums.reduce((acc, cur) => acc + cur, 0)];
    const average = {
        index: 0,
        value: Infinity,
    };
    let i = 0;
    while (i < nums.length) {
        const item = nums[i];
        const num = Math.abs(
            count(i + 1, "front", item) - count(nums.length - i - 1, "back", item)
        );
        if (num < average.value) {
            average.value = num;
            average.index = i;
        }
        i++;
    }

    function count(length, type, delta) {
        if(length === 0) return 0; // 最后一项时，后 n - i - 1 个元素为0个，因此返回0
        if (type === "front") {
            cache[0] = cache[0] + delta;
            return Math.floor(cache[0] / length);

        }
        if (type === "back") {
            cache[1] = cache[1] - delta;
            return Math.floor(cache[1] / length);
        }
    }

    return average.index;
};