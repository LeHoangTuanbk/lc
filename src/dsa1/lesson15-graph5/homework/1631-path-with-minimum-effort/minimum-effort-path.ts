const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function minimumEffortPath(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  let res = 0;
  res = dfs(0, 0, m, n, heights, visited);
  return res;
}

function dfs(
  x: number,
  y: number,
  m: number,
  n: number,
  heights: number[][],
  visited: boolean[][],
): number {
  visited[x][y] = true;
  if (x === m - 1 && y == n - 1) {
    return 0;
  }
  let minimumCurrentEffort = Infinity;

  for (const [dx, dy] of dirs) {
    const x2 = x + dx,
      y2 = y + dy;
    if (!isInside(x2, y2, m, n) || visited[x2][y2]) {
      continue;
    }
    minimumCurrentEffort = Math.min(
      minimumCurrentEffort,
      Math.abs(heights[x2][y2] - heights[x][y]),
      dfs(x2, y2, m, n, heights, visited),
    );
  }
  visited[x][y] = false;
  return minimumCurrentEffort;
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}
