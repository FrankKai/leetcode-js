/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let count = 0;
    for (const hour of hours) {
        if (hour >= target) {
            count++;
        }
    }
    return count;
};