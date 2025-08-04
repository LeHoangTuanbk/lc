export function maximumSum(arr: number[]): number {
  const n = arr.length;
  let maxNum = -Infinity;
  for (let i = 0; i < n; i++) {
    maxNum = Math.max(maxNum, arr[i]);
  }
  if (maxNum < 0) return maxNum;

  const dp: number[][] = Array.from({ length: 2 }, () => Array(n).fill(0));
  dp[0][0] = arr[0]; // no deletion
  dp[1][0] = 0; // one deletion

  let best = arr[0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = Math.max(dp[0][i - 1] + arr[i], arr[i]);
    dp[1][i] = Math.max(dp[1][i - 1] + arr[i], dp[0][i - 1]);
    best = Math.max(best, dp[0][i], dp[1][i]);
  }

  return best;
}

export function maximumSum2(arr: number[]): number {
  const n = arr.length;
  const dp0: number[] = Array(n).fill(0);
  const dp1: number[] = Array(n).fill(0);
  dp0[0] = arr[0]; // no deletion
  dp1[0] = 0; // one deletion
  let best = arr[0];

  for (let i = 1; i < n; i++) {
    dp0[i] = Math.max(dp0[i - 1] + arr[i], arr[i]);
    dp1[i] = Math.max(dp1[i - 1] + arr[i], dp0[i - 1]);
    best = Math.max(best, dp0[i], dp1[i]);
  }

  return best;
}

const arr = [1, -2, 0, 3];
console.log(maximumSum2(arr));
/* 
Example 1:

Input: arr = [1,-2,0,3]
Output: 4
Explanation: Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.
Example 2:

Input: arr = [1,-2,-2,3]
Output: 3
Explanation: We just choose [3] and it's the maximum sum.
Example 3:

Input: arr = [-1,-1,-1,-1]
Output: -1
Explanation: The final subarray needs to be non-empty. You can't choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.
*/
