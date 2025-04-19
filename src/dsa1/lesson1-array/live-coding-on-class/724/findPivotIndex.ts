export function pivotIndex(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let sumLeft: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sumLeft * 2 === sum - nums[i]) {
      return i;
    }
    sumLeft += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
