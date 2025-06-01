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
  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] || grid2[i][j]) {
        continue;
      }
    }
  }

  return res;
}

function dfs(
  x: number,
  y: number,
  m: number,
  n: number,
  grid1: number[][],
  grid2: number[][],
  visited: boolean[][],
) {
  visited[x][y] = true;
  let res = grid1[x][y] === 1;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (!inside(x, y, m, n) || (visited[x2][y2] && grid2[x2][y2] === 0)) {
      continue;
    }
    res &= dfs();
  }
}

function inside(x: number, y: number, m: number, n: number): boolean {
  return x >= 0 && x < m && y >= 0 && y < n;
}
