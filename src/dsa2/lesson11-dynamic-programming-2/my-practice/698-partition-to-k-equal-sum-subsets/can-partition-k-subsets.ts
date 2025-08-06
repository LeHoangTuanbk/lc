export function canPartitionKSubsets(nums: number[], k: number): boolean {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % k !== 0) return false;
  nums.sort((a, b) => b - a);
  const target = total / k;
  const used = Array(nums.length).fill(false);

  function backtrack(kLeft: number, start: number, currSum: number): boolean {
    if (kLeft === 0) return true;
    if (currSum === target) {
      return backtrack(kLeft - 1, 0, 0);
    }

    for (let i = start; i < nums.length; i++) {
      if (used[i] || currSum + nums[i] > target) continue;
      used[i] = true;
      if (backtrack(kLeft, i + 1, currSum + nums[i])) return true;
      used[i] = false;
      if (currSum === 0) break;
    }

    return false;
  }

  return backtrack(k, 0, 0);
}
/* 
Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false

*/
