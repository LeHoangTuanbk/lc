import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type State = { effort: number; r: number; c: number };

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function minimumEffortPath(heights: number[][]): number {
  const m = heights.length,
    n = heights[0].length;
  const routeEffort: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
  routeEffort[0][0] = 0;

  const pq = new MinPriorityQueue<State>((s) => s.effort);
  pq.enqueue({ r: 0, c: 0, effort: 0 });

  while (!pq.isEmpty()) {
    const { r, c, effort } = pq.dequeue();

    if (effort > routeEffort[r][c]) continue;
    if (r === m - 1 && c === n - 1) return effort;

    for (const [dr, dc] of dirs) {
      const newR = r + dr,
        newC = c + dc;
      if (!inside(newR, newC, m, n)) continue;
      const newEffort = Math.max(effort, Math.abs(heights[newR][newC] - heights[r][c]));
      if (routeEffort[newR][newC] > newEffort) {
        routeEffort[newR][newC] = newEffort;
        pq.enqueue({ r: newR, c: newC, effort: newEffort });
      }
    }
  }
}

function inside(r: number, c: number, m: number, n: number) {
  return r >= 0 && r < m && c >= 0 && c < n;
}
/* 
Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
*/
const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];

console.log(minimumEffortPath(heights));
