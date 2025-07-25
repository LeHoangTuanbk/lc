export function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  function backtrack(path: number[], start: number) {
    if (path.length === k) {
      res.push([...path]);
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 1);
  return res;
}

const n = 4,
  k = 2;
console.log(combine(n, k));
/* 
Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.

*/
