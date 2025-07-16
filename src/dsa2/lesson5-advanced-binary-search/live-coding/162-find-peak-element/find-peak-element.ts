function findPeakElement(nums: number[]): number {
  const n = nums.length;
  if (n == 1) {
    return 0;
  }

  if (n == 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }

  let lo = 1,
    hi = n - 2;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] > nums[mid - 1]) {
      if (nums[mid] > nums[mid + 1]) {
        return mid;
      }
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return hi == 0 ? 0 : n - 1;
}

/* 
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

*/
