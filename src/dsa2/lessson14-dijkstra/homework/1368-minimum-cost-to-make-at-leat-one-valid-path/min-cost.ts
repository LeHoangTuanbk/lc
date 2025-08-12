import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const dirs = [
  [0, 1], // right
  [0, -1], // left
  [1, 0], // down
  [-1, 0], // up
];

type Point = { x: number; y: number; cost: number };

export function minCost(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

  const pq = new MinPriorityQueue<Point>((a) => a.cost);
  dist[0][0] = 0;
  pq.enqueue({ x: 0, y: 0, cost: 0 });

  while (!pq.isEmpty()) {
    const { x, y, cost } = pq.dequeue();
    if (x === m - 1 && y === n - 1) return cost;
    if (cost > dist[x][y]) continue;

    for (let d = 0; d < 4; d++) {
      const nx = x + dirs[d][0];
      const ny = y + dirs[d][1];
      if (!inside(nx, ny, m, n)) continue;

      const extraCost = grid[x][y] === d + 1 ? 0 : 1;
      const newCost = cost + extraCost;

      if (newCost < dist[nx][ny]) {
        dist[nx][ny] = newCost;
        pq.enqueue({ x: nx, y: ny, cost: newCost });
      }
    }
  }
}

function inside(x: number, y: number, m: number, n: number) {
  return x >= 0 && x < m && y >= 0 && y < n;
}

const grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
/* 

1 which means go to the cell to the right. (i.e go from grid[i][j] to grid[i][j + 1])
2 which means go to the cell to the left. (i.e go from grid[i][j] to grid[i][j - 1])
3 which means go to the lower cell. (i.e go from grid[i][j] to grid[i + 1][j])
4 which means go to the upper cell. (i.e go from grid[i][j] to grid[i - 1][j])


Output: 3
Explanation: You will start at point (0, 0).
The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
The total cost = 3.

*/
