export function maxSubArray(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = Array(n).fill(-Infinity);
  dp[0] = nums[0];
  let best = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    best = Math.max(best, dp[i]);
  }

  return best;
}

export function maxSubArray2(nums: number[]): number {
  const n = nums.length;

  let preMaxSub = nums[0];
  let best = nums[0];

  for (let i = 1; i < n; i++) {
    const currentMaxSub = Math.max(preMaxSub + nums[i], nums[i]);
    best = Math.max(best, currentMaxSub);
    preMaxSub = currentMaxSub;
  }

  return best;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray2(nums));
/* 
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

*/
