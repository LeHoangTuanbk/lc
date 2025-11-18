export function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const fullMask = 2 << (n - 1);
  let sum = 0;
  for (let mask = 1; mask < fullMask; mask++) {
    let xor = 0;
    for (let i = 0; i < n; i++) {
      if ((1 << i) & mask) xor ^= nums[i];
    }
    sum += xor;
  }
  return sum;
}

const nums = [3, 4, 5, 6, 7, 8];
console.log(subsetXORSum(nums));
