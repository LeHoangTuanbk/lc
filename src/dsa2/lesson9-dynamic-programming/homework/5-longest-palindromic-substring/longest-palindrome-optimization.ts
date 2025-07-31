export function longestPalindrome(s: string): string {
  const n = s.length;
  if (n <= 1) return s;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let res = '';
  let maxLen = 0;

  for (let len = 1; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) {
        if (len <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }

        if (dp[i][j] && len > maxLen) {
          maxLen = len;
          res = s.slice(i, j + 1);
        }
      }
    }
  }
  return res;
}

const s = 'babad';
// console.log(checkPalindrome(0, 2, s));
console.log(longestPalindrome(s));

const s2 = 'ac';
console.log(longestPalindrome(s2));
/* 
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/
