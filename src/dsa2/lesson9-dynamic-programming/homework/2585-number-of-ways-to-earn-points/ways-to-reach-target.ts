// Wrong solution
export function waysToReachTarget(target: number, types: number[][]): number {
  const MOD = 1e9 + 7;

  //Binary decomposition
  const items: number[] = [];
  for (const [count, marks] of types) {
    let k = 1;
    let remaining = count;
    while (remaining > 0) {
      const take = Math.min(k, remaining);
      items.push(take * marks);
      remaining -= take;
      k *= 2;
    }
  }

  // 0/1 knapsack
  const n = items.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let t = 0; t <= target; t++) {
      dp[i][t] = dp[i - 1][t];
      if (items[i - 1] <= t) {
        dp[i][t] = (dp[i][t] + dp[i - 1][t - items[i - 1]]) % MOD;
      }
    }
  }

  return dp[n][target];
}

const target = 5,
  types = [
    [50, 1],
    [50, 2],
    [50, 5],
  ];
console.log(waysToReachTarget(target, types));
