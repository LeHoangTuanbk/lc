export function longestCommonSubsequence(s1: string, s2: string): number {
  const n = s1.length,
    m = s2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}
// Có thể tối ưu thêm bộ nhớ về O(n), do chỉ tính từ cái hàng trước thôi z á. Anh nói qua homework được không ạ?

export function longestCommonSubsequence2(s1: string, s2: string): number {
  const n1 = s1.length,
    n2 = s2.length;
  const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

  for (let i1 = 1; i1 <= n1; i1++) {
    for (let i2 = 1; i2 <= n2; i2++) {
      if (s1[i1 - 1] === s2[i2 - 1]) {
        dp[i1][i2] = 1 + dp[i1 - 1][i2 - 1];
      } else {
        dp[i1][i2] = Math.max(dp[i1 - 1][i2], dp[i1][i2 - 1]);
      }
    }
  }

  return dp[n1][n2];
}

export function knapsack(W: number, val: number[], wt: number[]) {
  const n = val.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      dp[i][j] = dp[i - 1][j];

      // take item i
      if (j >= wt[i - 1]) {
        dp[i][j] = Math.max(dp[i][j], val[i - 1] + dp[i - 1][j - wt[i - 1]]);
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
Idea này hay ạ