/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
    k--;
  }
}

const nums1 = [2, 0],
  m = 1,
  nums2 = [1],
  n = 1;

merge(nums1, m, nums2, n);
console.log(nums1);
