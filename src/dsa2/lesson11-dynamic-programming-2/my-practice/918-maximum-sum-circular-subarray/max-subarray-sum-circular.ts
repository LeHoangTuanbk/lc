export function maxSubarraySumCircular(nums: number[]): number {
  const n = nums.length;

  let totalSum = nums[0];
  let maxEndingHere = nums[0];
  let maxSubarraySum = nums[0];

  let minEndingHere = nums[0];
  let minSubarraySum = nums[0];

  for (let i = 1; i < n; i++) {
    const num = nums[i];
    totalSum += num;
    // max kadane's algorithm
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSubarraySum = Math.max(maxSubarraySum, maxEndingHere);

    // min kadane's algorithm
    minEndingHere = Math.min(num, minEndingHere + num);
    minSubarraySum = Math.min(minSubarraySum, minEndingHere);
  }

  if (maxSubarraySum < 0) return maxSubarraySum;

  return Math.max(maxSubarraySum, totalSum - minSubarraySum);
}

const nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));

/* 
Example 1:

Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
Example 2:

Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
Example 3:

Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
*/
