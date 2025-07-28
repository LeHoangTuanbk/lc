export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(maxMove).fill(-1)),
  );
  return dfs(startRow, startColumn, m, n, maxMove);
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const MOD = 1e7 + 9;

function dfs(x: number, y: number, m: number, n: number, maxMove: number) {
  if (maxMove < 0) return 0;
  if (x < 0 || y < 0 || x >= m || y >= n) return 1;

  let res = 0;
  for (const [dx, dy] of dirs) {
    const x2 = x + dx;
    const y2 = y + dy;
    res = (res + dfs(x2, y2, m, n, maxMove - 1)) % MOD;
  }
  return res;
}
