export function findDuplicates(nums: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const idx = nums[i] > 0 ? nums[i] : -nums[i];
    const pos = idx - 1;

    if (nums[pos] < 0) {
      res.push(idx);
    } else {
      nums[pos] = -nums[pos];
    }
  }
  return res;
}
