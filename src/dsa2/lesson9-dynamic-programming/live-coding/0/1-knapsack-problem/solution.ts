export function knapsack(weights: number[], profits: number[], W: number) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        // take item i
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + profits[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}

export function knapsackBackTrack(W: number, val: number[], wt: number[]) {
  const n = val.length;
  const memo = Array.from({ length: n + 1 }, () => Array(W + 1).fill(null));

  return backtrack(W, val, wt, n - 1, memo);
}

function backtrack(W: number, val: number[], wt: number[], i: number, memo: number[][]) {
  if (W == 0 || i < 0) return 0;

  if (memo[i][W] == null) {
    memo[i][W] = backtrack(W, val, wt, i - 1, memo);

    if (W >= wt[i]) {
      const profit = val[i] + backtrack(W - wt[i], val, wt, i - 1, memo);
      memo[i][W] = Math.max(memo[i][W], profit);
    }
  }
  return memo[i][W];
}
