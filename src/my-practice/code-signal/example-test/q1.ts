export function transformArray(nums: number[]) {
  const n = nums.length;
  if (n == 1) return nums;

  const res: number[] = Array<number>(n);
  res[0] = nums[0] + nums[1];
  res[n - 1] = nums[n - 2] + nums[n - 1];
  for (let i = 1; i < n - 1; i++) {
    res[i] = nums[i - 1] + nums[i] + nums[i + 1];
  }

  return res;
}
