export function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (n < 2) return 0;

  let maxSum = 0,
    current = 0;

  for (let i = 1; i < n; i++) {
    const diff = prices[i] - prices[i - 1];
    current = Math.max(0, current + diff);
    maxSum = Math.max(maxSum, current);
  }

  return maxSum;
}

export function maxProfit2(prices: number[]): number {
  const n = prices.length;
  if (n < 2) return 0;

  const diff: number[] = [];
  for (let i = 1; i < n; i++) {
    diff.push(prices[i] - prices[i - 1]);
  }

  const dp: number[] = Array(diff.length).fill(0);

  let best = dp[0];

  for (let i = 1; i < diff.length; i++) {
    dp[i] = Math.max(diff[i], dp[i - 1] + diff[i]);
    best = Math.max(dp[i], best);
  }

  return best;
}
