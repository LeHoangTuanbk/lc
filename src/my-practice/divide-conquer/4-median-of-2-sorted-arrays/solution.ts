export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sorted = nums1.concat(nums2).sort((a, b) => a - b);
  const n = sorted.length;
  const half = Math.floor((n - 1) / 2);

  if (n & 1) return sorted[half];
  else return (sorted[half] + sorted[half + 1]) / 2;
}

const nums1 = [1, 2],
  nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
