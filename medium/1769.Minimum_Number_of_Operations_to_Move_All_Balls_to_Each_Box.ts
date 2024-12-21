function minOperations(boxes: string): number[] {
    let current = 0;
    const result = [];
    while (current < boxes.length) {
        let cursor = 0;
        let distance = 0;
        while (cursor < boxes.length) {
            if (cursor !== current && boxes[cursor] === '1') {
                distance += Math.abs(cursor - current)
            }
            cursor++;
        }
        result.push(distance)
        current++;
    }
    return result
};
