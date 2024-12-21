/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    // 先判断中间，再判断左右边界
    for (let i = 0; i < flowerbed.length; i++) {
        // 首
        if (i == 0 && flowerbed[i] === 0 && (flowerbed[i + 1] === 0 || flowerbed.length === 1)) {
            flowerbed[i] = 1;
            n--;
            // 尾
        } else if (i == flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
            flowerbed[i] = 1;
            n--;
        } else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n--;
        }

    }
    return n <= 0
};