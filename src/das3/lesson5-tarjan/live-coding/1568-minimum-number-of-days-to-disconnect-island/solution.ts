export function minDays(grid: number[][]): number {
  const n = grid.length,
    m = grid[0].length;

  function getIndex(u: number, v: number) {
    return u * m + v;
  }

  const xx = [-1, 0, 1, 0];
  const yy = [0, 1, 0, -1];

  const graph: number[][] = Array.from({ length: n * m }, () => []);

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (grid[x][y] == 0) continue;
      for (let d = 0; d < 4; d++) {
        const nx = x + xx[d];
        const ny = y + yy[d];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

        if (grid[nx][ny] === 0) continue;

        const u = getIndex(x, y);
        const v = getIndex(nx, ny);

        graph[u].push(v);
        graph[v].push(u);
      }
    }
  }

  const num = Array(n * m).fill(0);
  const low = Array(n * m).fill(0);
  let count = 0;
  const aPoints: number[] = [];
  let components = 0;

  function dfs(u: number, parent: number = -1) {
    low[u] = num[u] = count + 1;
    count++;

    for (const v of graph[u]) {
      if (v === parent) continue;

      if (num[v] === 0) {
        // haven't visited
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
      } else {
        // already visited, back edge
        low[u] = Math.min(low[u], num[v]);
      }

      if (num[u] <= low[v]) {
        aPoints.push(u);
      }
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (grid[x][y] === 0) continue;
      const u = getIndex(x, y);
      if (num[u] > 0) continue;
      components++;

      if (components >= 2) return 0;
      dfs(u);
    }
  }
  if (aPoints.length > 0) {
    return 1;
  }
  return 0;
}
