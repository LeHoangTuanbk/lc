const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function containsCycle(grid: string[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;
  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) {
        continue;
      }
      if (dfs(i, j, -1, -1, m, n, grid, visited)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(
  x: number,
  y: number,
  fromX: number,
  fromY: number,
  m: number,
  n: number,
  grid: string[][],
  visited: boolean[][],
): boolean {
  visited[x][y] = true;

  for (const [dx, dy] of dirs) {
    const x2 = x + dx,
      y2 = y + dy;

    if (!isInside(x2, y2, m, n) || grid[x2][y2] != grid[x][y]) {
      continue;
    }

    if (visited[x2][y2]) {
      if (x2 !== fromX || y2 !== fromY) return true;
    } else {
      if (dfs(x2, y2, x, y, m, n, grid, visited)) {
        return true;
      }
    }
  }

  return false;
}

function isInside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}

const grid = [['a', 'a', 'b']];

containsCycle(grid);
