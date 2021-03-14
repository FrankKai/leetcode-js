/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      sandwiches.shift();
      students.shift();
      continue;
    }
    if (students.includes(sandwiches[0])) {
      students.push(students.shift());
      continue;
    }
    break;
  }
  return students.length;
};
