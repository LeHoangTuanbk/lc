function minSteps(n: number): number {
  const dp = Array(n + 1).fill(Infinity);
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        dp[i] = dp[j] + i / j;
        break;
      }
    }
  }
  return dp[n];
}
