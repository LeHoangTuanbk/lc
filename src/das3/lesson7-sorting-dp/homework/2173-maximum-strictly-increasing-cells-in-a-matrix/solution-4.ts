export function maxIncreasingCells(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(0));

  // precompute sorted rows and cols
  const rowList: [number, number][][] = Array.from({ length: m }, () => []);
  const colList: [number, number][][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowList[i].push([mat[i][j], j]);
      colList[j].push([mat[i][j], i]);
    }
  }

  for (let i = 0; i < m; i++) rowList[i].sort((a, b) => a[0] - b[0]);
  for (let j = 0; j < n; j++) colList[j].sort((a, b) => a[0] - b[0]);

  function dfs(r: number, c: number): number {
    if (memo[r][c]) return memo[r][c];
    const val = mat[r][c];
    let best = 1;

    const row = rowList[r];
    let lo = 0,
      hi = row.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (row[mid][0] <= val) lo = mid + 1;
      else hi = mid;
    }
    for (let k = lo; k < row.length; k++) {
      best = Math.max(best, 1 + dfs(r, row[k][1]));
    }

    const col = colList[c];
    lo = 0;
    hi = col.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (col[mid][0] <= val) lo = mid + 1;
      else hi = mid;
    }
    for (let k = lo; k < col.length; k++) {
      best = Math.max(best, 1 + dfs(col[k][1], c));
    }

    memo[r][c] = best;
    return best;
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }

  return ans;
}

// 🧪 Test
const mat2 = [
  [3, 1, 6],
  [5, 2, 9],
  [8, 7, 4],
];
console.log(maxIncreasingCells(mat2)); // ✅ 4
