export function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (const s of strs) {
    let zeros = 0;
    let ones = 0;

    for (const c of s) {
      if (c === '0') zeros++;
      else ones++;
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
}
