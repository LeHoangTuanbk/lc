export function makeArrayIncreasing(arr1: number[], arr2: number[]): number {
  // dp[i][j] = min(dp[i - 1][k] | k < j) + cost(i -> j)
  // O(n * 10^9)
  // ith number, arr2[j]; j = 0 -> m - 1, j = m: arr[i] stays the same => O(n * m * m)
  // dp[i][j] <= dp[i][j - 1] => O(n * m)

  arr2.sort((a, b) => a - b);

  arr2 = Array.from(new Set(arr2));

  const n = arr1.length,
    m = arr2.length;

  const dp: number[][] = Array.from({ length: n }, () => Array(m + 1).fill(0));

  for (let j = 0; j < m; j++) {
    dp[0][j] = 1;
  }

  dp[0][m] = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] = Infinity;

      if (arr1[i - 1] < arr2[j]) {
        dp[i][j] = dp[i - 1][m] + 1;
      }

      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }

    dp[i][m] = Infinity;

    if (arr1[i - 1] < arr1[i]) {
      dp[i][m] = dp[i - 1][m];
    }

    for (let j = 0; j < m; j++) {
      if (arr2[j] < arr1[i]) {
        dp[i][m] = Math.min(dp[i][m], dp[i - 1][j]);
      }
    }
  }

  let res = Infinity;

  for (let i = 0; i <= m; i++) {
    res = Math.min(res, dp[n - 1][i]);
  }

  return res < Infinity ? res : -1;
}
// Bai sau DP + bit mask
