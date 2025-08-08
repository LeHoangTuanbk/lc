// Time: O(n * sum), sum = n * max num[i]. Time co 10^2 * 2 * 10^2 * 10^2 => O(n2 * max(num[i]))
export function canPartition(nums: number[]): boolean {
  const n = nums.length;
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = true;
    for (let j = 1; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i] <= j) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[n][target];
}

export function canPartition2(nums: number[]): boolean {
  const n = nums.length;
  let sum = nums.reduce((a, b) => a + b);
  if (sum & 1) return false;

  const target = sum >> 1;
  let current: boolean[] = Array(target + 1).fill(false);
  current[0] = true;

  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = target; j >= num; j--) {
      if (num <= j) {
        current[j] = current[j] || current[j - num];
      }
    }
  }
  return current[target];
}

const nums = [1, 5, 11, 5];
console.log(canPartition2(nums));
