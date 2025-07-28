const mod = 1e9 + 7;
type Key = `${number}, ${number}, ${number}`;

export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const dp = new Map<Key, number>();
  return dfs(startRow, startColumn, m, n, dp, maxMove);
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function dfs(x: number, y: number, m: number, n: number, dp: Map<Key, number>, maxMove: number) {
  if (maxMove === 0) {
    return 0;
  }

  const key: Key = `${x}, ${y}, ${maxMove}`;
  if (dp.has(key)) {
    return dp.get(key);
  }

  let val = 0;
  for (const [dx, dy] of dirs) {
    const u = x + dx;
    const v = y + dy;
    if (!inside(u, v, m, n)) {
      val++;
      continue;
    }
    val = (val + dfs(u, v, m, n, dp, maxMove - 1)) % mod;
  }
  dp.set(key, val);
  return val;
}

function inside(x: number, y: number, m: number, n: number) {
  return x >= 0 && x < m && y >= 0 && y < n;
}
