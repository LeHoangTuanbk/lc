export function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums: number[], left: number, right: number) {
  if (left >= right) return;
  const pivotIndex = partition(nums, left, right);
  quickSort(nums, left, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, right);
}

function partition(nums: number[], left: number, right: number) {
  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
  [nums[right], nums[randomIndex]] = [nums[randomIndex], nums[right]];
  const pivot = nums[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}
const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
