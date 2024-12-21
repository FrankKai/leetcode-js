/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

    // 统计每个数字出现次数 { num: count }
    const counts = {};
    for (const num of nums) {
        if (!counts[num]) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }
    // 出现次数相同的归为一类 { frequence: [num1, num2, num3] }
    const frequences = {};
    for (const [num, count] of Object.entries(counts)) {
        if (!frequences[count]) {
            frequences[count] = [num]
        } else {
            frequences[count].push(num);
            frequences[count].sort((x, y) => y - x)
        }
    }
    // 生成结果
    let result = [];
    for (const frequence of Object.keys(frequences).sort((x, y) => x - y)) {
        const nums = frequences[frequence].reduce((acc, cur) => {
            acc = [...acc, ...new Array(parseInt(frequence)).fill(cur)];
            return acc;
        }, []);
        result = [...result, ...nums]
    }
    return result;
};