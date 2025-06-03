const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function findFarmland(land: number[][]): number[][] {
  const n = land.length;
  const m = land[0].length;
  const visited: boolean[][] = Array.from({ length: n }, () => Array(m).fill(false));
  const res: number[][] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!land[i][j] || visited[i][j]) {
        continue;
      }
      const coordinates = [i, j];
      const bottomRight = dfs(i, j, n, m, land, visited);
      coordinates.push(...bottomRight);
      res.push(coordinates);
    }
  }

  return res;
}

function dfs(
  x: number,
  y: number,
  n: number,
  m: number,
  land: number[][],
  visited: boolean[][],
): number[] {
  let bottomRight = [x, y];
  visited[x][y] = true;

  for (const [dx, dy] of dirs) {
    const x2 = x + dx,
      y2 = y + dy;
    if (!isInside(x2, y2, n, m) || visited[x2][y2] || !land[x2][y2]) {
      continue;
    }
    const [x3, y3] = dfs(x2, y2, n, m, land, visited);
    bottomRight = [Math.max(bottomRight[0], x3), Math.max(bottomRight[1], y3)];
  }
  return bottomRight;
}

function isInside(x: number, y: number, n: number, m: number) {
  return x >= 0 && y >= 0 && x < n && y < m;
}

const land = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 1],
];
const expectedOutput = [
  [0, 0, 0, 0],
  [1, 1, 2, 2],
];
console.log(findFarmland(land));

// 2 Pointers
export function findFarmland2(land: number[][]): number[][] {
  const n = land.length;
  const m = land[0].length;
  const visited: boolean[][] = Array.from({ length: n }, () => Array(m).fill(false));
  const res: number[][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 0 || visited[i][j]) continue;

      let row = i,
        col = j;
      // Bottom
      while (row + 1 < n && land[row + 1][j] === 1) row++;
      // Right
      while (col + 1 < m && land[i][col + 1] === 1) col++;

      for (let r = i; r <= row; r++) {
        for (let c = j; c <= col; c++) {
          visited[r][c] = true;
        }
      }

      res.push([i, j, row, col]);
    }
  }

  return res;
}
