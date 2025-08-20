export function stoneGameIII(stoneValue: number[]): string {
  const n = stoneValue.length;
  const dp: number[] = Array(n + 1).fill(-Infinity);
  dp[n] = 0;

  const suffixSum: number[] = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    suffixSum[i] = stoneValue[i];
    if (i + 1 < n) {
      suffixSum[i] += suffixSum[i + 1];
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    // Take 1
    if (i <= n - 1) {
      dp[i] = Math.max(dp[i], stoneValue[i] + (suffixSum[i + 1] - dp[i + 1]));
    }

    // Take 2
    if (i <= n - 2) {
      dp[i] = Math.max(dp[i], stoneValue[i] + stoneValue[i + 1] + (suffixSum[i + 2] - dp[i + 2]));
    }

    // Take 3
    if (i <= n - 3) {
      dp[i] = Math.max(
        dp[i],
        stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] + suffixSum[i + 3] - dp[i + 3],
      );
    }
  }

  const AliceScore = dp[0];
  const BobScore = suffixSum[0] - AliceScore;
  if (AliceScore === BobScore) return 'Tie';
  return AliceScore > BobScore ? 'Alice' : 'Bob';
}
// Can optimize to O(1) space
// Need to use minimax strategy
