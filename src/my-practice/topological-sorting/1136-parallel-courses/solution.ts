// https://leetcode.ca/all/1136.html
export function minimumSemesters(n: number, relations: number[][]): number {
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  const inDegree: number[] = Array(n + 1).fill(0);

  for (const [u, v] of relations) {
    graph[u].push(v);
    inDegree[v]++;
  }

  let queue: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let semester = 0,
    studied = 0;

  while (queue.length) {
    const nextQueue: number[] = [];
    for (const u of queue) {
      studied++;
      for (const v of graph[u]) {
        if (--inDegree[v] === 0) nextQueue.push(v);
      }
    }
    semester++;
    queue = nextQueue;
  }

  return studied === n ? semester : -1;
}

const N = 3,
  relations = [
    [1, 3],
    [2, 3],
  ];

console.log(minimumSemesters(N, relations));
/* 
Input: N = 3, relations = [[1,3],[2,3]]
Output: 2
Explanation: 
In the first semester, courses 1 and 2 are studied. In the second semester, course 3 is studied.
*/
