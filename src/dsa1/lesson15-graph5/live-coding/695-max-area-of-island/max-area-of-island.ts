const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let maxArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j] || visited[i][j]) {
        continue;
      }
      let area = 0;
      area = dfs(i, j, m, n, grid, visited);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
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
  let area = 1;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (!isInside(x2, y2, m, n) || visited[x2][y2] || !grid[x2][y2]) {
      continue;
    }
    area += dfs(x2, y2, m, n, grid, visited);
  }
  return area;
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));
