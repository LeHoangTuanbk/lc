export function maxIncreasingCells(mat: number[][]): number {
  const m = mat.length,
    n = mat[0].length;
  const cells: [number, number, number][] = []; // [val, row, col]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      cells.push([mat[i][j], i, j]);
    }
  }

  cells.sort((a, b) => a[0] - b[0]);

  const rowBest = new Array(m).fill(0);
  const colBest = new Array(n).fill(0);
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  let ans = 1;

  for (let i = 0; i < cells.length; ) {
    const j = i;
    const val = cells[i][0];
    const group: [number, number][] = [];
    while (i < cells.length && cells[i][0] === val) {
      const [, r, c] = cells[i];
      dp[r][c] = 1 + Math.max(rowBest[r], colBest[c]);
      ans = Math.max(ans, dp[r][c]);
      group.push([r, c]);
      i++;
    }

    for (const [r, c] of group) {
      rowBest[r] = Math.max(rowBest[r], dp[r][c]);
      colBest[c] = Math.max(colBest[c], dp[r][c]);
    }
  }

  return ans;
}

const mat = [
  [3, 1, 6],
  [-9, 5, 7],
];
console.log(maxIncreasingCells(mat));
