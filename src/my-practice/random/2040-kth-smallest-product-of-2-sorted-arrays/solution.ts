export function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
  const candidates = [
    nums1[0] * nums2[0],
    nums1[0] * nums2[nums2.length - 1],
    nums1[nums1.length - 1] * nums2[0],
    nums1[nums1.length - 1] * nums2[nums2.length - 1],
  ];

  let left = Math.min(...candidates);
  let right = Math.max(...candidates);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (countLE(nums1, nums2, mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function countLE(nums1: number[], nums2: number[], x: number) {
  let count = 0;
  const m = nums2.length;

  for (const a of nums1) {
    if (a === 0) {
      if (x >= 0) count += m;
    } else if (a > 0) {
      const limit = Math.floor(x / a);
      count += upperBound(nums2, limit);
    } else {
      const limit = Math.ceil(x / a);
      count += m - lowerBound(nums2, limit);
    }
  }

  return count;
}

function lowerBound(arr: number[], target: number): number {
  let l = 0,
    r = arr.length;
  while (l < r) {
    const m = (l + r) >> 1;
    if (arr[m] < target) l = m + 1;
    else r = m;
  }
  return l;
}

function upperBound(arr: number[], target: number): number {
  let l = 0,
    r = arr.length;
  while (l < r) {
    const m = (l + r) >> 1;
    if (arr[m] <= target) l = m + 1;
    else r = m;
  }
  return l;
}
