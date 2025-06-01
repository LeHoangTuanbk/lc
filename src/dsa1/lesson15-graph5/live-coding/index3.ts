const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid2.length;
  const n = grid2[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const components: number[][][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid2[i][j] || visited[i][j]) {
        continue;
      }
      let component: number[][] = [];
      dfs(i, j, m, n, grid2, visited, component);
      components.push(component);
    }
  }
  let res = 0;
  for (const com of components) {
    let flag = true;
    for (const [x, y] of com) {
      if (!grid1[x][y]) {
        flag = false;
      }
    }
    if (flag) {
      res++;
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
  component: number[][],
) {
  component.push([x, y]);
  visited[x][y] = true;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (inside(x2, y2, m, n) && y2 < n && !visited[x2][y2] && grid[x2][y2]) {
      dfs(x2, y2, m, n, grid, visited, component);
    }
  }
}

function inside(x: number, y: number, m: number, n: number): boolean {
  return x >= 0 && x < m && y >= 0 && y < n;
}
