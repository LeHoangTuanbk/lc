function runningSum(nums: number[]): number[] {
  const res: number[] = [];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    res.push(currentSum);
  }
  return res;
}
