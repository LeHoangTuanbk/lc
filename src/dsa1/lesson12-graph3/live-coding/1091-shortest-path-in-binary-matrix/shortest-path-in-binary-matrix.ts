const direction = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
];

const inf = 10e9;

export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }

  const visited: boolean[][] = [...Array(n)].map(() => Array(n).fill(false));
  const queue: number[][] = [[0, 0]];
  visited[0][0] = true;

  const distance: number[][] = [...Array(n)].map(() => Array(n).fill(inf));
  distance[0][0] = 1;

  while (queue.length) {
    const [i, j] = queue.shift()!;
    for (const [dx, dy] of direction) {
      const i2 = i + dx;
      const j2 = j + dy;
      if (i2 >= 0 && j2 >= 0 && i2 < n && j2 < n && !grid[i2][j2] && !visited[i2][j2]) {
        visited[i2][j2] = true;
        distance[i2][j2] = distance[i][j] + 1;
        queue.push([i2, j2]);
      }
    }
  }
  return distance[n - 1][n - 1] === inf ? -1 : distance[n - 1][n - 1];
}
