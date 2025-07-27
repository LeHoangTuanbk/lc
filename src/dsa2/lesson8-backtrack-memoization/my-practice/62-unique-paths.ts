export function uniquePaths(m: number, n: number): number {
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));
  dp[m - 1][n - 1] = 1;
  return dfs(0, 0, m, n, dp);
}

function dfs(x: number, y: number, m: number, n: number, dp: number[][]) {
  if (x >= m || y >= n) return 0;
  if (dp[x][y] !== -1) {
    return dp[x][y];
  }
  const res = dfs(x + 1, y, m, n, dp) + dfs(x, y + 1, m, n, dp);
  dp[x][y] = res;
  return res;
}

const m = 3,
  n = 7;
console.log(uniquePaths(m, n));
/* 
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

May need to consider DP bottom up approach.

*/
