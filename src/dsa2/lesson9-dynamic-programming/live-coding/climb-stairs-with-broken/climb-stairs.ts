export function countWays(n: number, broken: Set<number>): number {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (broken.has(i)) {
      dp[i] = 0;
    } else {
      if (i >= 1) dp[i] += dp[i - 1];
      if (i >= 2) dp[i] += dp[i - 2];
      if (i >= 3) dp[i] += dp[i - 3];
    }
  }
  return dp[n];
}
countWays(4, new Set([2]));
