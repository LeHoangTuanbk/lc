const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid2.length;
  const n = grid2[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => false),
  );

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 0 || visited[i][j]) {
        continue;
      }
      if (dfs(i, j, m, n, grid1, grid2, visited)) {
        res++;
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
): boolean {
  visited[x][y] = true;
  let res: boolean = grid1[x][y] == 1;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx,
      y2 = y + dy;
    if (!isInside(x2, y2, m, n) || visited[x2][y2] || grid2[x2][y2] == 0) {
      continue;
    }
    res = dfs(x2, y2, m, n, grid1, grid2, visited) && res;
  }
  return res;
}

function isInside(x: number, y: number, m: number, n: number): boolean {
  return x >= 0 && y >= 0 && x < m && y < n;
}

const grid1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
  ],
  grid2 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ];

console.log(countSubIslands(grid1, grid2));
