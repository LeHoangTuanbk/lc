const MOD = 1_000_000_007n;

export function numMusicPlaylists(n: number, goal: number, k: number): number {
  const dp: bigint[][] = Array.from({ length: goal + 1 }, () => new Array(n + 1).fill(0n));

  dp[0][0] = 1n;

  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= Math.min(i, n); j++) {
      dp[i][j] = (dp[i - 1][j - 1] * BigInt(n - j + 1)) % MOD;

      if (j > k) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j] * BigInt(j - k)) % MOD;
      }
    }
  }

  return Number(dp[goal][n]);
}
