export function countTriplets(nums: number[]): number {
  const twoAndFreq = new Map<number, number>();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const twoAnd = nums[i] & nums[j];
      twoAndFreq.set(twoAnd, (twoAndFreq.get(twoAnd) ?? 0) + 1);
    }
  }

  let res = 0;
  for (const num of nums) {
    for (const [twoAndValue, fre] of twoAndFreq.entries()) {
      if ((num & twoAndValue) === 0) {
        res += fre;
      }
    }
  }
  return res;
}
