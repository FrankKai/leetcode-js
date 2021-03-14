function largestAltitude(gain: number[]): number {
    let max = 0;
    let current = 0;
    for (const gainItem of gain) {
        current += gainItem;
        if (current > max ) max = current;
    }
    return max;
};