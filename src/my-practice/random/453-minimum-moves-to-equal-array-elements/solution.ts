function checkEqual(nums: number[]) {
  const a0 = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== a0) return false;
  }
  return true;
}
export function minMoves(nums: number[]): number {
  let minMove = 0;
  const n = nums.length;
  if (n == 2) return Math.abs(nums[0] - nums[1]);

  while (!checkEqual(nums)) {
    const max = Math.max(...nums);
    let ignore = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] === max && !ignore) {
        ignore = true;
        continue;
      }
      nums[i]++;
    }
    minMove++;
  }
  return minMove;
}

const nums = [1, 2, 3];

console.log(minMoves(nums));
