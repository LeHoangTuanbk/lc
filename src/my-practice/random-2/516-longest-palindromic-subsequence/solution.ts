export function longestPalindromeSubseq(s: string): number {
  const n = s.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) dp[i][i] = 1;
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        dp[i][j] = len == 2 ? 2 : dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

const s = 'bbbab';
console.log(longestPalindromeSubseq(s));

/* 
Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".

*/
