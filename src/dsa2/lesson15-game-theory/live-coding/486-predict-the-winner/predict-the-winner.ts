export function predictTheWinner(nums: number[]): boolean {
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const sum: number[] = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  // Need to traverse this way to make sure the previous dp value is calculated
  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      const sumRange = sum[j + 1] - sum[i]; // sum from i to j
      dp[i][j] = nums[i];
      if (i + 1 < n) {
        dp[i][j] = Math.max(dp[i][j], sumRange - dp[i + 1][j]);
      }
      if (j > 0) {
        dp[i][j] = Math.max(dp[i][j], sumRange - dp[i][j - 1]);
      }
    }
  }

  const scoreFirst = dp[0][n - 1];
  const scoreSecond = sum[n] - scoreFirst;

  return scoreFirst >= scoreSecond;
}

export function predictTheWinner2(nums: number[]): boolean {
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const sum: number[] = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  // length-based loop
  for (let len = 1; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      const sumRange = sum[j + 1] - sum[i]; // sum from i to j
      if (i === j) {
        dp[i][j] = nums[i];
      } else {
        const pickLeft = sumRange - dp[i + 1][j];
        const pickRight = sumRange - dp[i][j - 1];
        dp[i][j] = Math.max(pickLeft, pickRight);
      }
    }
  }

  const scoreFirst = dp[0][n - 1];
  const scoreSecond = sum[n] - scoreFirst;

  return scoreFirst >= scoreSecond;
}
