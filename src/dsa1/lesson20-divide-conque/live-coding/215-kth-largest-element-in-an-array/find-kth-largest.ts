function findKthLargest(nums: number[], k: number): number {
  const ps: number[] = [0];
  for (const e of nums) {
    ps.push(ps.at(-1) + e);
  }

  const n = ps.length;
}
