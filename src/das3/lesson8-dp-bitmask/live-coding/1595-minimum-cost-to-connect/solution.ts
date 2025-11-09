export function connectTwoGroups(cost: number[][]): number {
  const m = cost.length,
    n = cost[0].length;
  const dp = Array.from({ length: m + 1 }, () => Array(1 << n).fill(Infinity));
  dp[0][0] = 0;

  for (let i = 0; i < m; i++) {
    for (let mask = 0; mask < 1 << n; mask++) {
      for (let j = 0; j < n; j++) {
        const mask2 = mask | (1 << j);
        dp[i][mask2] = Math.min(dp[i][mask2], dp[i][mask] + cost[i][j]);
        dp[i + 1][mask2] = Math.min(dp[i + 1][mask2], dp[i][mask] + cost[i][j]);
      }
    }
  }
  return dp[m][(1 << n) - 1];
}
