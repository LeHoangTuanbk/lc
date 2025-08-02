export function coinChange(coins: number[], amount: number): number {
  const MAX = Number.MAX_SAFE_INTEGER - 1;
  const n = coins.length;
  //dp[i][j]: số lượng coin ít nhất để tạo thành tổng j sử dụng chỉ các coin từ 0 đến i-1 (tức coins[0..i-1]).
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= amount; j++) {
      if (i === 0) dp[i][j] = MAX;
      if (j === 0) dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (coins[i - 1] <= j) {
        dp[i][j] = Math.min(dp[i][j], 1 + dp[i][j - coins[i - 1]]);
      }
    }
  }

  return dp[n][amount] === MAX ? -1 : dp[n][amount];
}
