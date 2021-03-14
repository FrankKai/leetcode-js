function maximumTime(time: string): string {
    const times: string[] = time.split("");
    const MARK = '?';
    if (times.indexOf(MARK) === -1) return time;
    if (times[0] === MARK) {
        const secondHour = parseInt(times[1]);
        if (times[1] === MARK) {
            times[0] = '2',
                times[1] = '3'
        } else if (secondHour > 3) {
            times[0] = '1'
        } else if (secondHour <= 3) {
            times[0] = '2'
        }
    }
    if (times[1] === MARK) {
        const firstHour = parseInt(times[0])
        if (firstHour === 2) {
            times[1] = '3'
        } else if (firstHour < 2) {
            times[1] = '9'
        }
    }

    if (times[3] === MARK) {
        times[3] = '5'
        if (times[4] === '?') {
            times[4] = '9'
        }
    }
    if (times[4] === MARK) {
        times[4] = '9'
    }
    return times.join("");
};