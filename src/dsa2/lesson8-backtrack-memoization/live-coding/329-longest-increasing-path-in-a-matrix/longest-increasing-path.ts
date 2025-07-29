const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function longestIncreasingPath(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let best = 0;

  const dp = Array.from({ length: m }, () => Array(n).fill(-1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      best = Math.max(best, dfs(i, j, matrix, dp, m, n));
    }
  }
  return best;
}

function dfs(x: number, y: number, matrix: number[][], dp: number[][], m: number, n: number) {
  if (dp[x][y] != -1) {
    return dp[x][y];
  }

  let val = 1;
  for (const [dx, dy] of dirs) {
    const u = x + dx;
    const v = y + dy;

    if (!inside(u, v, m, n) || matrix[u][v] <= matrix[x][y]) {
      continue;
    }
    val = Math.max(val, 1 + dfs(u, v, matrix, dp, m, n));
  }
  dp[x][y] = val;
  return val;
}

function inside(x: number, y: number, m: number, n: number) {
  return x >= 0 && y >= 0 && x < m && y < n;
}

/* 
- Duyệt tất cả các cell trong matrix
- Mỗi cell, dfs để tìm longest path 
- Update max cho đến khi duyệt hết. 
Cần memoize lại cái giá trị max từ một cell để lần sau duyệt sẵn dùng. 
*/
