function canSplit(nums: number[], k: number, sum: number): boolean {
  let pieces = 1;
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curSum + nums[i] > sum) {
      pieces++;
      curSum = nums[i];
    } else {
      curSum += nums[i];
    }
  }
  return pieces <= k;
}

export function splitArray(nums: number[], k: number): number {
  let left = Math.max(...nums),
    right = nums.reduce((a, b) => a + b, 0);

  while (left < right) {
    const mid = (left + right) >> 1;
    if (canSplit(nums, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const nums = [7, 2, 5, 10, 8],
  k = 2;
console.log(splitArray(nums, k));
/* 
Example 1:

Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
Example 2:

Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
*/
