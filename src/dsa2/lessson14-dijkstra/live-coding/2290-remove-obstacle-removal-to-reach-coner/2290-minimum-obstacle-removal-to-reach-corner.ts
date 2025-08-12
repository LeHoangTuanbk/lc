import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function minimumObstacles(grid: number[][]): number {
  const n = grid.length,
    m = grid[0].length;

  const dis = Array.from({ length: n }, () => Array(m).fill(Infinity));

  dis[0][0] = 0;
  const pq = new MinPriorityQueue<number[]>((x) => x[2]);

  pq.enqueue([0, 0, 0]);

  while (!pq.isEmpty()) {
    const cur: number[] = pq.dequeue();
    for (const [dx, dy] of dirs) {
      const u = cur[0] + dx;
      const v = cur[1] + dy;
      if (!inside(u, v, n, m)) {
        continue;
      }

      const nextDis = cur[2] + grid[u][v];
      if (nextDis < dis[u][v]) {
        dis[u][v] = nextDis;
        pq.enqueue([u, v, nextDis]);
      }
    }
  }

  return dis[n - 1][m - 1];
}

function inside(x: number, y: number, n: number, m: number) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

const grid = [
  [0, 1, 1],
  [1, 1, 0],
  [1, 1, 0],
];

const grid2 = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
];
console.log(minimumObstacles(grid));
console.log(minimumObstacles(grid2));
