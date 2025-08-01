export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((pre, curr) => pre + curr, 0);
  if (sum % 2 == 1) return false;
  const n = nums.length;
  const W = sum / 2;

  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (w >= nums[i - 1]) {
        dp[i][w] = dp[i - 1][w] || dp[i - 1][w - nums[i - 1]];
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}

export function canPartition2(nums: number[]): boolean {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 != 0) return false;

  const target = total / 2;
  const n = nums.length;

  const dp = Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[target];
}

const nums = [1, 5, 11, 5];
console.log(canPartition(nums));

/* 
Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

*/
