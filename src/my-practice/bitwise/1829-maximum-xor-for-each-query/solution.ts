export function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let totalXor = nums.reduce((t, x) => t ^ x, 0);
  const n = nums.length;
  const fullMask = (1 << maximumBit) - 1;
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = fullMask ^ totalXor;
    totalXor ^= nums[n - 1 - i];
  }
  return res;
}

/* 
5 = 0101

*/
