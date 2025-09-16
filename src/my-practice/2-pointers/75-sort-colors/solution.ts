// Solution 1: Counting sort

export function sortColors(nums: number[]): void {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;

  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      i++;
      low++;
    } else if (nums[i] == 2) {
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    } else {
      i++; // nums[i] === 1
    }
  }
}
