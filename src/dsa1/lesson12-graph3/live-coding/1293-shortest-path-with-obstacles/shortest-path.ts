export function shortestPath(grid: number[][], k: number): number {
  const m = grid.length,
    n = grid[0].length;
  const dist = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(k + 1).fill(Infinity)),
  );

  const queue: [number, number, number][] = [[0, 0, k]];
  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(k + 1).fill(false)),
  );
  visited[0][0][k] = true;
  dist[0][0][k] = 0;
  const dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  while (queue.length) {
    const [i, j, k] = queue.shift()!;
    for (const [dx, dy] of dirs) {
      const i2 = i + dx,
        j2 = j + dy;
      if (i2 >= 0 && j2 >= 0 && i2 < m && j2 < n) {
        const k2 = grid[i2][j2] === 0 ? k : k - 1;
        if (k2 >= 0 && !visited[i2][j2][k2]) {
          visited[i2][j2][k2] = true;
          dist[i2][j2][k2] = dist[i][j][k] + 1;
          queue.push([i2, j2, k2]);
        }
      }
    }
  }
  const minSteps = Math.min(...dist[m - 1][n - 1]);
  return minSteps === Infinity ? -1 : minSteps;
}
