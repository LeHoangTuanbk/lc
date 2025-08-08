export function countPartitions(nums: number[], k: number): number {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b);
  if (total < k * 2) return 0;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
  dp[0][0] = 1;
  const MOD = 1e9 + 7;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j < k; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i - 1] <= j) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
      dp[i][j] %= MOD;
    }
  }

  let inValidCount = 0;
  for (let i = 0; i < k; i++) {
    inValidCount += dp[n][i] * 2;
    inValidCount %= MOD;
  }

  let pow2n = 1;
  for (let i = 1; i <= n; i++) {
    pow2n = (pow2n * 2) % MOD;
  }

  let res = (pow2n + MOD - inValidCount) % MOD;
  return res;
}

export function countPartitions2(nums: number[], k: number): number {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b);
  if (total < k * 2) return 0;

  const dp: number[] = Array(k).fill(0);
  dp[0] = 1;
  const MOD = 1e9 + 7;

  for (const num of nums) {
    for (let j = k; j >= num; j--) {
      if (num <= j) {
        dp[j] += dp[j - num];
      }
      dp[j] %= MOD;
    }
  }

  let inValidCount = 0;
  for (let i = 0; i < k; i++) {
    inValidCount += dp[i] * 2;
    inValidCount %= MOD;
  }

  let pow2n = 1;
  for (let i = 1; i <= n; i++) {
    pow2n = (pow2n * 2) % MOD;
  }

  let res = (pow2n + MOD - inValidCount) % MOD;
  return res;
}

const nums = [1, 2, 3, 4],
  k = 4;
console.log(countPartitions2(nums, k));
