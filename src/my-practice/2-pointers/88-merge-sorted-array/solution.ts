/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n - 1;
  while (n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }
    index--;
  }
}

const nums1 = [2, 0],
  m = 1,
  nums2 = [1],
  n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
