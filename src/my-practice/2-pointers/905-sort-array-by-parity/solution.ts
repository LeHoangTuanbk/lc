export function sortArrayByParity(nums: number[]): number[] {
  const n = nums.length;
  let i = 0,
    j = n - 1;

  while (i < j) {
    const isNumIOdd = nums[i] % 2 === 1;
    const isNumJEven = nums[j] % 2 == 0;
    if (!isNumIOdd) {
      i++;
      continue;
    }

    if (!isNumJEven) {
      j--;
      continue;
    }

    if (isNumIOdd && isNumJEven) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return nums;
}

export function sortArrayByParity2(nums: number[]): number[] {
  const even = nums.filter((x) => x % 2 === 0);
  const odd = nums.filter((x) => x % 2 === 1);
  return even.concat(odd);
}

export function sortArrayByParity3(nums: number[]): number[] {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }
  return nums;
}

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
/* 
Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000

*/
