export function minMoves(nums: number[]): number {
  let min = Infinity;
  let sum = 0;
  const n = nums.length;
  for (const num of nums) {
    min = Math.min(num, min);
    sum += num;
  }
  return sum - min * n;
}
