export function rearrangeArray(nums: number[]): number[] {
  const n = nums.length;
  let i = 0,
    j = 1;
  while (i < n && j < n) {
    if (nums[i] > 0) {
      i = i + 2;
      continue;
    }

    if (nums[j] < 0) {
      j = j + 2;
      continue;
    }

    if (nums[i] < 0 && nums[j] > 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i = i + 2;
      j = j + 2;
    }
  }
  return nums;
}

const nums = [3, 1, -2, -5, 2, -4];
console.log(rearrangeArray(nums));

/* 
Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.


Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].

*/
