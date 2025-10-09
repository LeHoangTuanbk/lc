export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let lo = 0,
    hi = nums.at(-1) - nums[0];

  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countPairs(nums, mid) >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

function countPairs(nums: number[], dist: number): number {
  let count = 0;
  for (let i = 0, j = 0; j < nums.length; j++) {
    while (nums[j] - nums[i] > dist) i++;
    count += j - i;
  }
  return count;
}
