export function subsetXORSum(nums: number[]): number {
  const n = nums.length;
  const or = nums.reduce((s, a) => s | a, 0);
  return or * (1 << (n - 1));
}
