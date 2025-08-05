export function maxProfit(k: number, prices: number[]): number {
  const n = prices.length;
  const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0)); // k days, to ith price

  for (let i = 1; i <= k; i++) {
    let bestPrev = -Infinity;
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j - 1];
      dp[i][j] = Math.max(dp[i][j], prices[j - 1] + bestPrev);
      bestPrev = Math.max(bestPrev, dp[i - 1][j - 1] - prices[j - 1]);
    }
  }

  return dp[k][n];
}
