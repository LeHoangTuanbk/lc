export function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1,
    sum = 0,
    closestSum = -Infinity;

  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum < k) {
      closestSum = Math.max(closestSum, sum);
      left++;
    } else {
      right--;
    }
  }
  return closestSum === -Infinity ? -1 : closestSum;
}
/* 
Example 1:

Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation: 
We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

[10, 20 , 30], k = 25

Input: A = [10,20,30], K = 15
Output: -1
Explanation: 
In this case it's not possible to get a pair sum less that 15.

*/
