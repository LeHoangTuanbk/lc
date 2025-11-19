export function countPairs(nums: number[], low: number, high: number): number {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const xorValue = nums[i] ^ nums[j];
      if (xorValue >= low && xorValue <= high) {
        count++;
      }
    }
  }
  return count;
}
