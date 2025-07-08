export function mergeSort(nums: number[]) {
  mergeSortHelper(nums, 0, nums.length - 1);
}

function mergeSortHelper(nums: number[], l: number, h: number) {
  if (l >= h) return;
  const m = Math.floor(l + (h - l) / 2);
  mergeSortHelper(nums, l, m);
  mergeSortHelper(nums, m + 1, h);
  merge(nums, l, m, h);
}

function merge(nums: number[], l: number, m: number, h: number) {
  const merged: number[] = [];
  let i = l,
    j = m + 1;
  while (i <= m && j <= h) {
    if (nums[i] <= nums[j]) {
      merged.push(nums[i++]);
    } else {
      merged.push(nums[j++]);
    }
  }
  while (i <= m) {
    merged.push(nums[i++]);
  }
  while (j <= h) {
    merged.push(nums[j++]);
  }
  for (let k = 0; k < merged.length; k++) {
    nums[l + k] = merged[k];
  }
  return;
}

const nums: number[] = [3, 4, 7, 2, 1, 0, 9, -1];
mergeSort(nums);
console.log(nums);

const nums2: number[] = [3, 10, 7, 2, 1, 0, 9, -11];
mergeSort(nums2);
console.log(nums2);
