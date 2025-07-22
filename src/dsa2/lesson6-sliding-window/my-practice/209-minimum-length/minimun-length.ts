export function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let res = Infinity,
    start = 0,
    currentSum = 0;

  for (let end = 0; end < n; end++) {
    currentSum += nums[end];
    while (currentSum >= target) {
      res = Math.min(res, end - start + 1);
      currentSum -= nums[start];
      start++;
    }
  }

  return res === Infinity ? 0 : res;
}

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));
