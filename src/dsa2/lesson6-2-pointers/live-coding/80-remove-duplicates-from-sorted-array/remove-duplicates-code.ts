export function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n <= 2) return n;

  let cnt = 1,
    j = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) cnt++;
    else cnt = 1;

    if (cnt <= 2) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);
/* 
Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/
