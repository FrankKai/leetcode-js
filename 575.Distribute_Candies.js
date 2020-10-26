/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
    /**
    * 去重
    */
    const half = candies.length / 2
    const uniq = [...new Set(candies)];
    if (uniq.length >= half) {
        return half
    } else {
        return uniq.length
    }
    /**
     * 一行
     */
    return [...new Set(candies)].length >= candies.length / 2 ? candies.length / 2 : [...new Set(candies)].length;
};