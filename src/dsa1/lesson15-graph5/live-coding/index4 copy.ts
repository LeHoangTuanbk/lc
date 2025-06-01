const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const queue: number[][] = [];

export function shortestBridge(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const component1: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!grid[i][j] || visited[i][j]) {
        continue;
      }
      dfs(i, j, m, n, grid, visited, component1);
    }
  }
  //bfs
  const queue: number[][] = component1;
  console.log(queue);
  while (queue.length) {
    const [x, y] = queue.shift()!;
    let res = 0;
    for (const [dx, dy] of dirs) {
      const x2 = x + dx;
      const y2 = y + dy;
      if (inside(x2, y2, m, n) && y2 < n && !visited[x2][y2]) {
        if (grid[x2][y2]) {
          return res;
        }
        visited[x2][y2] = true;
        queue.push([x2, y2]);
        res++;
      }
    }
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
  component1: number[][],
) {
  visited[x][y] = true;
  component1.push([x, y]);
  visited[x][y] = true;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    if (inside(x2, y2, m, n) && y2 < n && !visited[x2][y2] && grid[x2][y2]) {
      dfs(x2, y2, m, n, grid, visited, component1);
    }
  }
}

function inside(x: number, y: number, m: number, n: number): boolean {
  return x >= 0 && x < m && y >= 0 && y < n;
}
