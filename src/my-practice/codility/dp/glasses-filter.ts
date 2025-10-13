// https://leetcode.com/discuss/post/1321793/codility-assessment-questions-2021-by-an-lwdi/

export function solution(N: number, K: number) {
  const dp = new Array(K + 1).fill(Infinity);
  dp[0] = 0;

  for (let cap = 1; cap <= N; cap++) {
    for (let sum = K; sum >= cap; sum--) {
      dp[sum] = Math.min(dp[sum], dp[sum - cap] + 1);
    }
  }

  return dp[K] === Infinity ? -1 : dp[K];
}

export function solution2(N: number, K: number) {
  const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(Infinity));

  dp[0][0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= K; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= i && dp[i - 1][j - i] !== Infinity) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - i] + 1);
      }
    }
  }

  return dp[N][K] === Infinity ? -1 : dp[N][K];
}
