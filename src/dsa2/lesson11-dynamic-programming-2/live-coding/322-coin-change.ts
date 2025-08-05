export function coinChange(coins: number[], amount: number): number {
  const n = coins.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(Infinity));

  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 0;
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coins[i - 1]] + 1);
      }
    }
  }

  return dp[n][amount] < Infinity ? dp[n][amount] : -1;
}

export function coinChange2(coins: number[], amount: number): number {
  const n = coins.length;

  const dp: number[] = Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    // dp[i][0] = 0;
    for (let j = 1; j <= amount; j++) {
      // dp[i][j] = dp[i - 1][j];
      if (coins[i - 1] <= j) {
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
      }
    }
  }

  return dp[amount] < Infinity ? dp[amount] : -1;
}
