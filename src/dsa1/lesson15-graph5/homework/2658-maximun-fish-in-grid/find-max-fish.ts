const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function findMaxFish(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j] || visited[i][j]) {
        continue;
      }
      res = Math.max(res, dfs(i, j, m, n, grid, visited));
    }
  }
  return res;
}

function dfs(
  x: number,
  y: number,
  m: number,
  n: number,
  grid: number[][],
  visited: boolean[][],
): number {
  visited[x][y] = true;
  let sum = grid[x][y];
  for (const [dx, dy] of dirs) {
    const x2 = x + dx,
      y2 = y + dy;
    if (!isInside(x2, y2, m, n) || visited[x2][y2] || !grid[x2][y2]) {
      continue;
    }
    sum += dfs(x2, y2, m, n, grid, visited);
  }
  return sum;
}
function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}
