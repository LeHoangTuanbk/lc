export function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp: number[] = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let curMax = 0;
    for (let len = 1; len <= k && i - len >= 0; len++) {
      curMax = Math.max(curMax, arr[i - len]);
      dp[i] = Math.max(dp[i], dp[i - len] + curMax * len);
    }
  }

  return dp[n];
}
/* 
Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]
Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83
Example 3:

Input: arr = [1], k = 1
Output: 1

*/
