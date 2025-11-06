export function isMatch(s: string, p: string): boolean {
  const m = s.length,
    n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false)); // [i, j] => s[0...i - 1] khop p[0...j - 1]
  dp[0][0] = true;

  // s = "", pattern has *
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] !== '*') {
        dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
      } else {
        // 0 times or at least 1 times
        dp[i][j] = dp[i][j - 2] || ((s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
}

/* 
'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.

*/
