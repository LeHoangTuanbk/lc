export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let res = 0;

  // with num[i]
  const count = new Map<number, number>();
  let i = 0,
    j = 0;
  for (const a of nums) {
    while (j < n && nums[j] <= a + k) {
      count.set(nums[j], (count.get(nums[j]) ?? 0) + 1);
      j++;
    }

    while (i < n && nums[i] < a - k) {
      count.set(nums[i], (count.get(nums[i]) ?? 0) - 1);
      i++;
    }

    const cur = Math.min(j - i, (count.get(a) ?? 0) + numOperations);
    res = Math.max(res, cur);
  }

  // without num[i]
  i = 0;
  for (let j = 0; j < n; j++) {
    while (nums[i] + 2 * k < nums[j]) {
      i++;
    }
    res = Math.max(res, Math.min(j - i + 1, numOperations));
  }

  return res;
}

const nums = [37, 30, 37],
  k = 26,
  numOperations = 1;
console.log(maxFrequency(nums, k, numOperations));
