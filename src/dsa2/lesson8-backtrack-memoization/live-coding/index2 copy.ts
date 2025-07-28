const mod = 1e7 + 9;
export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(maxMove + 1).fill(-1)),
  );

  return dfs(startColumn, startRow, m, n, dp, maxMove);
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function dfs(x: number, y: number, m: number, n: number, dp: number[][][], maxMove: number) {
  if (maxMove === 0) {
    return 0;
  }

  if (inside(x, y, m, n) && dp[x][y][maxMove] != -1) {
    return dp[x][y][maxMove];
  }

  let val = 0;
  for (const [dx, dy] of dirs) {
    const u = x + dx;
    const v = y + dy;
    if (!inside(u, v, m, n)) {
      val++;
      continue;
    }
    val += dfs(u, v, m, n, dp, maxMove - 1);
    val %= mod;
  }
  return val;
}

function inside(x: number, y: number, m: number, n: number) {
  return 0 <= x && x <= m && 0 <= y && y <= n;
}
