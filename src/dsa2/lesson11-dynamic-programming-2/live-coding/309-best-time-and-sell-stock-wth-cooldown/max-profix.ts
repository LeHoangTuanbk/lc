export function maxProfit(prices: number[]): number {
  const n = prices.length;
  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]; // rest day

    // sell day
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], prices[i - 1] - prices[j - 1] + (j == 1 ? 0 : dp[j - 2]));
    }
  }

  return dp[n];
}

export function maxProfit2(prices: number[]): number {
  const n = prices.length;
  const dp = Array(n + 1).fill(0);
  let bestPrev = -prices[0];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]; // rest day
    dp[i] = Math.max(dp[i], prices[i - 1] + bestPrev); // sell day
    bestPrev = Math.max(bestPrev, -prices[i - 1] + dp[i - 2]);
  }

  return dp[n];
}

const prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices));
