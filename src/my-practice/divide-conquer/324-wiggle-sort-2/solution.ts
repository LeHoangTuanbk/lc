export function wiggleSort(nums: number[]): void {
  const sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;
  const mid = Math.floor((n - 1) / 2);
  let left = mid;
  let right = n - 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      nums[i] = sorted[left];
      left--;
    } else {
      nums[i] = sorted[right];
      right--;
    }
  }
}
