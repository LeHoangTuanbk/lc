const dirs = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

export function knightProbability(n: number, k: number, row: number, column: number): number {
  const dp: number[][][] = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n }, () => Array(n).fill(0)),
  );

  function dfs(step: number, r: number, c: number): number {
    if (r < 0 || r >= n || c < 0 || c >= n) return 0;
    if (dp[step][r][c]) return dp[step][r][c];
    if (step === 0) return 1;
    let total = 0;
    for (const [dx, dy] of dirs) {
      const newR = r + dx,
        newC = c + dy;
      total += dfs(step - 1, newR, newC);
    }
    const res = total / 8;
    dp[step][r][c] = res;
    return res;
  }

  return dfs(k, row, column);
}

const n = 3,
  k = 2,
  row = 0,
  column = 0;
console.log(knightProbability(n, k, row, column));
