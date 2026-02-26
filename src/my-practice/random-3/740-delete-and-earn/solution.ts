export function deleteAndEarn(nums: number[]): number {
  const maxVal = Math.max(...nums);

  const points = Array(maxVal + 1).fill(0);
  for (const num of nums) {
    points[num] += num;
  }

  const dp = new Array(maxVal + 1).fill(0);

  dp[0] = 0;
  dp[1] = points[1];

  for (let i = 2; i <= maxVal; i++) {
    const take = dp[i - 2] + points[i];
    const skip = dp[i - 1];
    dp[i] = Math.max(take, skip);
  }

  return dp[maxVal];
}
