export function quickSort(nums: number[]) {
  quickSortHelper(nums, 0, nums.length - 1);
}

function quickSortHelper(nums: number[], low: number, high: number) {
  if (low < high) {
    const partitionIndex = partition(nums, low, high);
    quickSortHelper(nums, low, partitionIndex - 1);
    quickSortHelper(nums, partitionIndex + 1, high);
  }
}

function partition(nums: number[], low: number, high: number) {
  const pivot = nums[high];
  let storeIndex = low - 1;

  for (let i = low; i < high; i++) {
    if (nums[i] < pivot) {
      storeIndex++;
      [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
    }
  }
  storeIndex++;
  [nums[storeIndex], nums[high]] = [nums[high], nums[storeIndex]];

  return storeIndex;
}

const nums: number[] = [3, 4, 7, 2, 1, 0, 9, -1];
quickSort(nums);
console.log(nums);

const nums2: number[] = [3, 10, 7, 2, 1, 0, 9, -11];
quickSort(nums2);
console.log(nums2);
