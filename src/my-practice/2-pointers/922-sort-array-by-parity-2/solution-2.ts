export function sortArrayByParityII(nums: number[]): number[] {
  let i = 0,
    j = 1,
    n = nums.length;
  while (i < n && j < n) {
    if (nums[i] % 2 === 0) {
      i += 2;
    } else if (nums[j] % 2 === 1) {
      j += 2;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i += 2;
      j += 2;
    }
  }
  return nums;
}

const nums = [4, 2, 0, 6, 5, 7, 9, 11];
console.log(sortArrayByParityII(nums));
/* 
Example 1:

Input: nums = [4,2,0,6, 5,7,9,11]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]

*/
