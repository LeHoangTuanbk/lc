export function intersect(nums1: number[], nums2: number[]): number[] {
  const nums1Freq = new Map<number, number>();
  for (const num of nums1) {
    nums1Freq.set(num, (nums1Freq.get(num) ?? 0) + 1);
  }
  const res: number[] = [];

  for (let num of nums2) {
    if (nums1Freq.has(num)) {
      res.push(num);
      nums1Freq.set(num, nums1Freq.get(num) - 1);
      if (nums1Freq.get(num) == 0) {
        nums1Freq.delete(num);
      }
    }
  }

  return res;
}

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2));
