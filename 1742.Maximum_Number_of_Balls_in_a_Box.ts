function countBalls(lowLimit: number, highLimit: number): number {
    const map = new Map();
    let i = lowLimit;
    function getBoxNum(num: number) {
        if (num >= 1 && num < 10) {
            return num;
        }
        let boxNum = 0;
        while (num) {
            boxNum += num % 10
            num = Math.floor(num / 10)
        }
        return boxNum;
    }
    let maxBalls = 0;
    while (i <= highLimit) {
        const boxNum = getBoxNum(i);
        map.set(boxNum, map.get(boxNum) ? map.get(boxNum) + 1 : 1);
        if (map.get(boxNum) > maxBalls) {
            maxBalls = map.get(boxNum)
        }
        i++;
    }
    return maxBalls;
};