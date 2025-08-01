export function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n <= 1) return n;
  const dp = Array(n).fill(1);
  let best = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    best = Math.max(best, dp[i]);
  }

  return best;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
/* 
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1

*/
