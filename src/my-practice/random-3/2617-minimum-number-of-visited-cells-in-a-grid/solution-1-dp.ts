export function minimumVisitedCells(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));

  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === Infinity) continue;

      for (let k = j + 1; k <= Math.min(n - 1, j + grid[i][j]); k++) {
        dp[i][k] = Math.min(dp[i][k], dp[i][j] + 1);
      }

      for (let k = i + 1; k <= Math.min(m - 1, i + grid[i][j]); k++) {
        dp[k][j] = Math.min(dp[k][j], dp[i][j] + 1);
      }
    }
  }

  return dp[m - 1][n - 1] === Infinity ? -1 : dp[m - 1][n - 1];
}

const grid = [
  [3, 4, 2, 1],
  [4, 2, 3, 1],
  [2, 1, 0, 0],
  [2, 4, 0, 0],
];
console.log(minimumVisitedCells(grid)); // 4
/* 
m == grid.length
n == grid[i].length
1 <= m, n <= 10^5
1 <= m * n <= 10^5
0 <= grid[i][j] < m * n
grid[m - 1][n - 1] == 0

*/
