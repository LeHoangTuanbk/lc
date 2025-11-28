export function maxIncreasingCells(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(1));

  const cells: [number, number, number][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      cells.push([mat[i][j], i, j]);
    }
  }

  cells.sort((a, b) => a[0] - b[0]);

  let ans = 1;

  for (const [val, r, c] of cells) {
    let best = 0;

    for (let x = 0; x < n; x++) {
      if (mat[r][x] < val) best = Math.max(best, dp[r][x]);
    }

    for (let y = 0; y < m; y++) {
      if (mat[y][c] < val) best = Math.max(best, dp[y][c]);
    }

    dp[r][c] = 1 + best;
    ans = Math.max(ans, dp[r][c]);
  }

  return ans;
}
