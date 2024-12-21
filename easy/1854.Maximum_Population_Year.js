/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    // map key: 年份, value：人数
    // 取最大值 Math.max map.values()
    // 最小年份获取需要注意 因为map的key按照set顺序来排的
    const map = new Map();
    for (const log of logs) {
        // [1950, 1961] => 1950, 1951, ...1960, 1961❌
        let startYear = log[0];
        let endYear = log[1];
        while (startYear < endYear) {
            map.set(startYear, map.has(startYear) ? map.get(startYear) + 1 : 1)
            startYear++;
        }
    }
    const maxNum = Math.max.apply(null, [...map.values()])
    let latestYear = Infinity;
    for (const [year, num] of map) {
        if (maxNum === num && year < latestYear) {
            latestYear = year;
        }
    }
    return latestYear;
};