function totalMoney(n: number): number {
    let money: number = 0;
    let monday: number = 0;
    let day: number = 1;
    while (day <= n) {
        if (day > 7 && day % 7 === 1) {
            monday = monday - 6 + 1;
        } else {
            monday++
        }
        money += monday;
        day++;
    }
    return money
};