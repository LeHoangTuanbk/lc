export function knightProbability(n: number, k: number, row: number, column: number): number {
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

  const dp: number[][][] = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n }, () => Array(n).fill(0)),
  );
  dp[0][row][column] = 1;

  for (let step = 1; step <= k; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dx, dy] of dirs) {
          const pi = i - dx;
          const pj = j - dy;

          if (pi >= 0 && pi < n && pj >= 0 && pj < n) {
            dp[step][i][j] += dp[step - 1][pi][pj] / 8;
          }
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res += dp[k][i][j];
    }
  }
  return res;
}
