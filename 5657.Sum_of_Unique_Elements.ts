function sumOfUnique(nums: number[]): number {
    const counts: Map<number, number> = new Map();
    for (const num of nums) {
        const value = counts.get(num);
        counts.set(num, value ? value + 1 : 1);
    }
    let sum = 0;
    counts.forEach((value, key) => {
        if (value === 1) sum += key;
    })
    return sum;
};