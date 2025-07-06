function findMiddleIndex(nums: number[]): number {
  const n = nums.length;
  if (n == 1) return 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
  }

  if (sum === nums[0]) return 0;

  const prefixSum: number[] = Array(n + 2).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    if (prefixSum[i] === sum - prefixSum[i] - nums[i]) {
      return i;
    }
  }

  return -1;
}

function findMiddleIndex2(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((pre, cur) => pre + cur, 0);
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - nums[i]) return i;
    leftSum += nums[i];
    rightSum -= nums[i];
  }

  return -1;
}

/* 
Example 1:

nums = [4,0]
expected: 0;

sum = 4
i = 1
prefixSum : [0,4,0,0]


nums = [1]
expected: 0;

prefixSum = [0,1,0]
sum = 1;
i = 1
prefixSum[1] = 1 = 1 - 1

Input: nums = [2,3,-1,8,4]
Output: 3
Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4
Example 2:

Input: nums = [1,-1,4]
Output: 2
Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0
Example 3:

Input: nums = [2,5]
Output: -1
Explanation: There is no valid middleIndex.

*/
