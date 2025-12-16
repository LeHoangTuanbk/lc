export function longestOnes(nums: number[], k: number): number {
  let start = 0,
    end = 0,
    zeros = 0;
  let maxLen = 0;
  while (end < nums.length) {
    if (nums[end] === 0) {
      zeros++;
    }
    if (zeros > k) {
      if (nums[start] === 0) {
        zeros--;
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
}

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
console.log(longestOnes(nums, k));
