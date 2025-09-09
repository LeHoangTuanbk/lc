export function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0,
    windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}

const nums = [0, 4, 0, 3, 2];
console.log(findMaxAverage(nums, 1));
