/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    // 计算双向距离，比较大小取小值
    // 单向距离，直接计算即可；另一方向距离，用总和减去单项距离即可
    // 有一点需要注意：当start大于destination时，交换后再计算
    let dest = 0;
    let sum = 0;
    let range = { start: Math.min(start, destination), end: Math.max(start, destination) }
    for (let i = 0; i < distance.length; i++) {
        if (i >= range.start && i < range.end) {
            dest += distance[i]
        }
        sum += distance[i]
    }
    const res = Math.min(dest, sum - dest)
    return res;
};
