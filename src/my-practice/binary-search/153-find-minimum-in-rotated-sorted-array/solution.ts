export function findMin(nums: number[]): number {
  const n = nums.length;

  if (n == 2) return nums[0] > nums[1] ? nums[1] : nums[0];

  let low = 0,
    high = n - 1;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] <= nums[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return nums[low];
}

const nums = [3, 1, 2];

console.log(findMin(nums));
