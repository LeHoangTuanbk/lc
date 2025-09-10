export function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number,
): boolean {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= i + indexDiff; j++) {
      if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
        return true;
      }
    }
  }

  return false;
}

const ms = [1, 2, 3, 1],
  indexDiff = 3,
  valueDiff = 0;
console.log(containsNearbyAlmostDuplicate(ms, indexDiff, valueDiff));
/* 

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

*/
