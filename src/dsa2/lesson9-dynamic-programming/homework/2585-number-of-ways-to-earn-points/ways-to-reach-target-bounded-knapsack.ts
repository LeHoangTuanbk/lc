export function waysToReachTarget(target: number, types: number[][]): number {
  const MOD = 1e9 + 7;
  const n = types.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    const [count, marks] = types[i - 1];
    for (let t = 0; t <= target; t++) {
      dp[i][t] = dp[i - 1][t];
      for (let k = 1; k <= count; k++) {
        const score = k * marks;
        if (t < score) break;
        dp[i][t] = (dp[i][t] + dp[i - 1][t - score]) % MOD;
      }
    }
  }

  return dp[n][target];
}

const target = 6,
  types = [
    [6, 1],
    [3, 2],
    [2, 3],
  ];
console.log(waysToReachTarget(target, types));
