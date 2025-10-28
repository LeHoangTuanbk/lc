export function countValidSelections(nums: number[]): number {
  const n = nums.length;
  const sumLeft = Array(n + 1).fill(0);
  const sumRight = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sumLeft[i + 1] = sumLeft[i] + nums[i];
    sumRight[n - i - 1] = sumRight[n - i] + nums[n - i - 1];
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (sumLeft[i] === sumRight[i + 1]) {
        res += 2;
      }
      if (Math.abs(sumLeft[i] - sumRight[i + 1]) === 1) {
        res++;
      }
    }
  }
  return res;
}
const nums = [1, 0, 2, 0, 3];
console.log(countValidSelections(nums));
