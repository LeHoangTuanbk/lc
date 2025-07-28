export function uniquePaths(m: number, n: number): number {
  const dp = Array({ length: m }, () => Array(n).fill(-1));
  dp[m - 1][n - 1] = 1;
  return dfs(0, 0, m, n, dp);
}

function dfs(x: number, y: number, m: number, n: number, dp: number[][]) {
  if (dp[x][y] != -1) {
    return dp[x][y];
  }

  let val = 0;
  if (x < m - 1) {
    val += dfs(x + 1, y, m, n, dp);
  }

  if (y < n - 1) {
    val += dfs(x, y + 1, m, n, dp);
  }

  dp[x][y] = val;

  return val;
}
