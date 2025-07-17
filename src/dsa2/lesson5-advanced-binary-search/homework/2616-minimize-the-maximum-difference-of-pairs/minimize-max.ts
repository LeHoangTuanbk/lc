export function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a - b);

  let lo = 0,
    hi = nums.at(-1) - nums[0],
    res = hi;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canMakePairs(nums, p, mid)) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return res;
}

function canMakePairs(nums: number[], p: number, maxDiff: number): boolean {
  let count = 0;
  for (let i = 0; i < nums.length; ) {
    if (nums[i + 1] - nums[i] <= maxDiff) {
      count++;
      i += 2;
    } else {
      i += 1;
    }
  }
  return count >= p;
}
/* 
Example 1:
 the minimum maximum difference among all p pairs. 


Input: nums = [10,1,2,7,1,3], p = 2

[1,1,2,3,7,10]
Output: 1
Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5. 
The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.
Example 2:

Input: nums = [4,2,1,2], p = 1
Output: 0
Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.

*/
