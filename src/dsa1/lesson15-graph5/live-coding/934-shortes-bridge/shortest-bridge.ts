const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

export function shortestBridge(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const queue: number[][] = [];
  let found = false;

  for (let i = 0; i < m && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (!grid[i][j] || visited[i][j]) {
        continue;
      }
      dfs(i, j, m, n, grid, visited, queue);
      found = true;
    }
  }

  let res = 0;
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of dirs) {
        const x2 = x + dx;
        const y2 = y + dy;
        if (!inside(x2, y2, m, n) || visited[x2][y2]) {
          continue;
        }
        if (grid[x2][y2]) {
          return res;
        }
        visited[x2][y2] = true;
        queue.push([x2, y2]);
      }
    }
    res++;
  }

  return -1;
}

function dfs(
  x: number,
  y: number,
  m: number,
  n: number,
  grid: number[][],
  visited: boolean[][],
  queue: number[][],
) {
  visited[x][y] = true;
  queue.push([x, y]);
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (inside(x2, y2, m, n) && y2 < n && !visited[x2][y2] && grid[x2][y2]) {
      dfs(x2, y2, m, n, grid, visited, queue);
    }
  }
}

function inside(x: number, y: number, m: number, n: number): boolean {
  return x >= 0 && x < m && y >= 0 && y < n;
}
