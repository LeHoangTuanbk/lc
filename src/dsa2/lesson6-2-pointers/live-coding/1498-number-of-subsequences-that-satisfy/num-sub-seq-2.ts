export function numSubseq(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = n - 1;
  let result = 0;
  const MOD = 1e9 + 7;

  const pow2 = new Array(n);
  pow2[0] = 1;
  for (let i = 1; i < n; i++) {
    pow2[i] = (pow2[i - 1] * 2) % MOD;
  }

  while (left <= right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      result = (result + pow2[right - left]) % MOD;
      left++;
    }
  }

  return result;
}
