const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const areas: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j] || visited[i][j]) {
        continue;
      }
      let area = 0;
      area = dfs(i, j, m, n, grid, visited);
      areas.push(area);
    }
  }
  return Math.max(...areas);
}

function dfs(x: number, y: number, m: number, n: number, grid: number[][], visited: boolean[][]) {
  visited[x][y] = true;
  let area = 1;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (x2 >= 0 && x2 < m && y2 >= 0 && y2 < n && !visited[x2][y2] && grid[x2][y2]) {
      area += dfs(x2, y2, m, n, grid, visited);
    }
  }
  return area;
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
