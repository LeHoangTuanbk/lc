export function getMaximumGold(grid: number[][]): number {
  let res = 0;
  const m = grid.length,
    n = grid[0].length;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(r: number, c: number): number {
    if (!(r >= 0 && c >= 0 && r < m && c < n) || visited[r][c] || !grid[r][c]) return 0;
    visited[r][c] = true;
    const maxGold =
      grid[r][c] + Math.max(dfs(r + 1, c), dfs(r - 1, c), dfs(r, c + 1), dfs(r, c - 1));
    visited[r][c] = false;
    return maxGold;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        res = Math.max(res, dfs(i, j));
      }
    }
  }

  return res;
}

const grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];
console.log(getMaximumGold(grid));
