export function longestCommonSubsequence(s1: string, s2: string): number {
  const n1 = s1.length,
    n2 = s2.length;
  const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

  for (let i1 = 1; i1 <= n1; i1++) {
    for (let i2 = 1; i2 <= n2; i2++) {
      if (s1[i1 - 1] === s2[i2 - 1]) {
        dp[i1][i2] = 1 + dp[i1 - 1][i2 - 1];
      } else {
        dp[i1][i2] = Math.max(dp[i1 - 1][i2], dp[i1][i2 - 1]);
      }
    }
  }

  return dp[n1][n2];
}

export function longestCommonSubsequence2(s1: string, s2: string): number {
  const n1 = s1.length,
    n2 = s2.length;
  let prev = Array(n2 + 1).fill(0);
  let curr = Array(n2 + 1).fill(0);

  for (let i1 = 1; i1 <= n1; i1++) {
    for (let i2 = 1; i2 <= n2; i2++) {
      if (s1[i1 - 1] === s2[i2 - 1]) {
        curr[i2] = 1 + prev[i2 - 1];
      } else {
        curr[i2] = Math.max(prev[i2], curr[i2 - 1]);
      }
    }
    // [curr, prev] = [prev, curr];
    prev = [...curr];
  }

  return prev[n2];
}
/* 
Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

*/
