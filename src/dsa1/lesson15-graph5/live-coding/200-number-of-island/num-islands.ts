const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const gridValue = {
  1: '1',
  0: '0',
};

export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === gridValue[0] || visited[i][j]) {
        continue;
      }
      dfs(i, j, m, n, grid, visited);
      res++;
    }
  }
  return res;
}

function dfs(x: number, y: number, m: number, n: number, grid: string[][], visited: boolean[][]) {
  visited[x][y] = true;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (!isInside(x2, y2, m, n) || visited[x2][y2] || grid[x2][y2] === gridValue[0]) {
      continue;
    }
    dfs(x2, y2, m, n, grid, visited);
  }
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];
console.log(numIslands(grid));
