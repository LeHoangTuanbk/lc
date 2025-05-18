export function countStudents2(students: number[], sandwiches: number[]): number {
  let nContinuousWait = 0;
  while (sandwiches.length && nContinuousWait < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      nContinuousWait = 0;
    } else {
      const s = students.shift();
      students.push(s!);
      nContinuousWait++;
    }
  }
  return students.length;
}

export function countStudents(students: number[], sandwiches: number[]): number {
  let nContinuousWait = 0;
  let topQ = 0;
  while (sandwiches.length && nContinuousWait < students.length) {
    if (students[0] === sandwiches[topQ]) {
      students.shift();
      nContinuousWait = 0;
      topQ++;
    } else {
      const s = students.shift();
      students.push(s!);
      nContinuousWait++;
    }
  }
  return students.length;
}
