export function maxIncreasingCells(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;
  const memo = Array.from({ length: m }, () => Array(n).fill(0));

  function dfs(r: number, c: number): number {
    if (memo[r][c] !== 0) return memo[r][c];

    let best = 1;

    for (let x = 0; x < n; x++) {
      if (mat[r][x] > mat[r][c]) {
        best = Math.max(best, 1 + dfs(r, x));
      }
    }

    for (let y = 0; y < m; y++) {
      if (mat[y][c] > mat[r][c]) {
        best = Math.max(best, 1 + dfs(y, c));
      }
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

const mat = [
  [3, 1, 6],
  [5, 2, 9],
  [8, 7, 4],
];
console.log(maxIncreasingCells(mat)); // ✅ 4
