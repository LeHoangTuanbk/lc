export function longestPalindrome(s: string): string {
  let res = '';
  const n = s.length;
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false)); // 2d array [n][n]
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    for (let j = i; j < n; j++) {
      const isPalindrome = checkPalindrome(i, j, s, dp);
      dp[i][j] = isPalindrome;
      if (isPalindrome) {
        if (j - i + 1 > res.length) {
          res = s.slice(i, j + 1);
        }
      }
    }
  }
  return res;
}

function checkPalindrome(start: number, end: number, s: string, dp: boolean[][]) {
  // while (start < end) {
  //   if (s[start] !== s[end]) {
  //     return false;
  //   }
  //   start++;
  //   end--;
  // }
  start++;
  end--;
  if (dp[start][end] === false) return false;
  else return true;
}

const s = 'babad';
// console.log(checkPalindrome(0, 2, s));
console.log(longestPalindrome(s));
/* 
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/
