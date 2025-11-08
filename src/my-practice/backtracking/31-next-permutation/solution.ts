/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
  const n = nums.length;
  let i = n - 2;

  // 2 1 3 4
  // 1 4 3 2 => 1
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  reverse(nums, i + 1, n - 1);
}

function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
