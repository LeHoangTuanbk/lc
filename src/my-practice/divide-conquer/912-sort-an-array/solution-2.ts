export function sortArray(nums: number[]): number[] {
  const n = nums.length;
  const tmp = Array(n).fill(0);

  function mergeSort(l: number, r: number) {
    if (l == r) return;
    const mid = (l + r) >> 1;
    mergeSort(l, mid);
    mergeSort(mid + 1, r);
    merge(nums, tmp, l, mid, r);
  }

  function merge(nums: number[], tmp: number[], l: number, mid: number, r: number) {
    let i = l,
      j = mid + 1,
      k = l;

    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) tmp[k++] = nums[i++];
      else tmp[k++] = nums[j++];
    }
    while (i <= mid) tmp[k++] = nums[i++];
    while (j <= r) tmp[k++] = nums[j++];

    for (let x = l; x <= r; x++) nums[x] = tmp[x];
  }

  mergeSort(0, n - 1);
  return nums;
}

const nums = [5, 2, 3, 1];
console.log(sortArray(nums));
