export function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const n = nums1.length,
    m = nums2.length;
  let i = 0,
    j = 0,
    res: number[] = [];

  while (i < n && j < m) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }
  return res;
}
