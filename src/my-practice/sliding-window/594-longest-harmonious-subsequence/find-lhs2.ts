export function findLHS(nums: number[]): number {
  nums.sort((a, b) => a - b);
  /*
  [
    1, 2, 2, 2,
    3, 3, 5, 7
  ]
  */
  let maxLength = 0,
    j = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - nums[j] > 1) {
      j++;
    }
    if (nums[i] - nums[j] === 1) {
      maxLength = Math.max(maxLength, i - j + 1);
    }
  }

  return maxLength;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));
/* 
Example 1:

Input: nums = [1,3,2,2,5,2,3,7]

Output: 5

Explanation:

The longest harmonious subsequence is [3,2,2,2,3].

Example 2:

Input: nums = [1,2,3,4]

Output: 2

Explanation:

The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:

Input: nums = [1,1,1,1]

Output: 0

Explanation:

No harmonic subsequence exists.

 

Constraints:

1 <= nums.length <= 2 * 104
-109 <= nums[i] <= 109

*/
