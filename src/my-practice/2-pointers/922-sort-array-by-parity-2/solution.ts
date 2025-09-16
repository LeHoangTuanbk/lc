export function sortArrayByParityII(nums: number[]): number[] {
  const odd = nums.filter((num) => num % 2 == 1);
  const even = nums.filter((num) => num % 2 == 0);
  const n = nums.length;

  for (let k = 0; k < n; k = k + 2) {
    nums[k] = even[k / 2];
  }
  for (let k = 1; k < n; k = k + 2) {
    nums[k] = odd[Math.floor(k / 2)];
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
