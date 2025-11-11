export function uniquePathsIII(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  let startR = 0,
    startC = 0,
    nonObstacle = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] >= 0) {
        nonObstacle++;
      }
      if (grid[i][j] === 1) {
        startR = i;
        startC = j;
      }
    }
  }

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  let res = 0;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function backtrack(r: number, c: number, remain: number): number {
    if (grid[r][c] == 2 && remain === 1) {
      res++;
      return;
    }

    visited[r][c] = true;
    remain--;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr >= 0 && nc >= 0 && nr < m && nc < n && !visited[nr][nc] && grid[nr][nc] >= 0) {
        backtrack(nr, nc, remain);
      }
    }
    visited[r][c] = false;
  }

  backtrack(startR, startC, nonObstacle);

  return res;
}
