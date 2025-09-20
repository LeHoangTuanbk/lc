export function canChange(start: string, target: string): boolean {
  const n = start.length,
    m = target.length;
  let i = 0,
    j = 0;

  while (i <= n && j <= m) {
    while (start[i] == '_') {
      i++;
    }
    while (target[j] == '_') {
      j++;
    }
    if (start[i] !== target[j]) return false;
    if (i == n || j === m) {
      return i == n && j == m;
    }
    if (i < j) {
      if (start[i] !== 'R') {
        return false;
      }
    }
    if (i > j) {
      if (start[i] !== 'L') {
        return false;
      }
    }
    i++;
    j++;
  }

  return true;
}

const start = '_L',
  target = 'LR';
console.log(canChange(start, target));

/* 
Example 1:

Input: start = "_L__R__R_", target = "L______RR"
Output: true
Explanation: We can obtain the string target from start by doing the following moves:
- Move the first piece one step to the left, start becomes equal to "L___R__R_".
- Move the last piece one step to the right, start becomes equal to "L___R___R".
- Move the second piece three steps to the right, start becomes equal to "L______RR".
Since it is possible to get the string target from start, we return true.
Example 2:

Input: start = "R_L_", target = "__LR"
Output: false
Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
After that, no pieces can move anymore, so it is impossible to obtain the string target from start.
Example 3:

Input: start = "_R", target = "R_"
Output: false
Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.

*/
