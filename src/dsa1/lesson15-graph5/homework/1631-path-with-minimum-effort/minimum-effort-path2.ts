const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function minimumEffortPath(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;
  const effort: number[][] = Array.from({ length: m }, () => Array(n).fill(10e4));
  const pq: [number, number, number][] = [[0, 0, 0]]; //[effort, x, y]
  effort[0][0] = 0;
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [curEffort, x, y] = pq.shift()!;
    if (x === m - 1 && y === n - 1) return curEffort;

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (!isInside(nx, ny, m, n)) {
        continue;
      }

      const diff = Math.abs(heights[x][y] - heights[nx][ny]);
      const nextEffort = Math.max(curEffort, diff);

      if (nextEffort < effort[nx][ny]) {
        effort[nx][ny] = nextEffort;
        pq.push([nextEffort, nx, ny]);
      }
    }
  }

  return -1;
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}
