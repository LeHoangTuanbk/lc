// function isValid(s: string): boolean {
//   let st: string[] = [];
//   const p = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };
//   for (let c of s) {
//     if (c in p) {
//       st.push(c);
//     } else {
//       if (st.length && p[st[-1]]) {
//         return false;
//       }
//     }
//   }
//   return st.length === 0;
// }

/*
Example 1:

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
*/

function countStudents(students: number[], sandwiches: number[]): number {
  let nWait = 0;
  let topQ = 0;
  while (nWait < students.length) {
    if (students[0] === sandwiches[sandwiches.length - 1]) {
      students.shift();
      topQ++;
      nWait = 0;
    } else {
      students.push(students[0]);
      students.shift();
      nWait++;
    }
  }
  return students.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));

function backspaceCompare(s: string, t: string): boolean {
  function process(s: string): string {
    const st: string[] = [];
    for (let c of s) {
      if (c == '#') {
        st.pop();
      } else {
        st.push(c);
      }
    }
    return st.join('');
  }

  let s1 = process(s);
  let s2 = process(t);

  return s1 === s2;
}

class RecentCounter {
  q: number[];
  constructor() {
    this.q = [];
  }

  ping(t: number): number {
    this.q.push(t);

    while (this.q[0] < t - 3000) {
      this.q.shift();
    }
    return this.q.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
