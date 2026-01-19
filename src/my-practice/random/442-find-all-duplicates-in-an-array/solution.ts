export function findDuplicates(nums: number[]): number[] {
  let res: number[] = [];
  for (const num of nums) {
    const absNum = Math.abs(num);
    const idx = absNum - 1;
    if (nums[idx] < 0) {
      res.push(absNum);
    }
    nums[idx] = -nums[idx];
  }
  return res;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums));
