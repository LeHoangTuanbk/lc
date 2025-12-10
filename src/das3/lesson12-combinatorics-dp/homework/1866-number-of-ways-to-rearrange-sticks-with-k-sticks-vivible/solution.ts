const MOD = 1_000_000_007n;
export function rearrangeSticks(n: number, k: number): number {
  // n sticks, k visible
  const dp: bigint[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0n));

  dp[0][0] = 1n;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      dp[i][j] = dp[i - 1][j - 1];

      dp[i][j] = (dp[i][j] + dp[i - 1][j] * BigInt(i - 1)) % MOD;
    }
  }

  return Number(dp[n][k]);
}
