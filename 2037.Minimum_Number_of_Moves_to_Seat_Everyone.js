/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((x, y) => x - y);
    students.sort((x, y) => x - y);
    let count = 0;
    for (let i = 0; i < seats.length; i++) {
      count += Math.abs(seats[i] - students[i]);
    }
    return count;
  };