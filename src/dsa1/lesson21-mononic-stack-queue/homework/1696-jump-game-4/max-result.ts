function maxResult2(nums: number[], k: number): number {
  const n = nums.length;
  const dp = Array(n).fill(-Infinity);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    for (let j = Math.max(0, i - k); j < i; j++) {
      dp[i] = Math.max(dp[j] + nums[i], dp[i]);
    }
  }
  return dp[n - 1];
}

export function maxResult(nums: number[], k: number): number {
  const n = nums.length;
  const dp = Array(n).fill(0);
  dp[0] = nums[0];
  const dequeue: number[] = [0];

  for (let i = 1; i < n; i++) {
    while (dequeue.length && dequeue[0] < i - k) {
      dequeue.shift();
    }

    dp[i] = dp[dequeue[0]] + nums[i];

    while (dequeue.length && dp[i] >= dp[dequeue.at(-1)]) {
      dequeue.pop();
    }
    dequeue.push(i);
  }

  return dp[n - 1];
}

/* 

Example 1:

Input: nums = [1,-1,-2,4,-7,3], k = 2
Output: 7
Explanation: You can choose your jumps forming the subsequence [1,-1,4,3] (underlined above). The sum is 7.
Example 2:

Input: nums = [10,-5,-2,4,0,3], k = 3
Output: 17
Explanation: You can choose your jumps forming the subsequence [10,4,3] (underlined above). The sum is 17.
Example 3:

Input: nums = [1,-5,-20,4,-1,3,-6,-3], k = 2
Output: 0

*/
