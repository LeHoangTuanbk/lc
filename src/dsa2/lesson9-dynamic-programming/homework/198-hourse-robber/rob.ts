export function rob(nums: number[]): number {
  const n = nums.length;
  const dp = Array(n + 2).fill(0);
  for (let i = 2; i <= n + 1; i++) {
    /* 
    rob at i

    or not rob at i
    */
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 2]);
  }
  return dp[n + 1];
}
/* 
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

export function rob2(nums: number[]): number {
  const n = nums.length;
  const dp = Array(n + 1).fill(0);
  dp[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    /* 
    rob at i

    or not rob at i
    */
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[n];
}

export function rob3(nums: number[]): number {
  const n = nums.length;
  let prev1 = 0,
    prev2 = 0;

  for (const num of nums) {
    const current = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

const nums = [1, 2, 3, 1];
console.log(rob3(nums));
