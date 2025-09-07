function minOperations(nums: number[]): number {
  if (nums.length == 1) return 0;
  let isAllEqual = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      isAllEqual = false;
      break;
    }
  }
  return isAllEqual ? 0 : 1;
}
