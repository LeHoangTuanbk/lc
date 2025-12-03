export function countSmaller(nums: number[]): number[] {
  const n = nums.length;
  const count = Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) {
    count[i] = countRightSmaller(nums[i], nums, i + 1, n - 1);
  }
  return count;
}

function countRightSmaller(target: number, nums: number[], l: number, r: number): number {
  if (l === r) {
    if (nums[l] < target) {
      return 1;
    }
    return 0;
  }
  const mid = (l + r) >> 1;
  return countRightSmaller(target, nums, l, mid) + countRightSmaller(target, nums, mid + 1, r);
}

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums));
