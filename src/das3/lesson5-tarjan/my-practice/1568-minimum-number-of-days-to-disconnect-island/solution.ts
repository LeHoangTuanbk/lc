export function minDays(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // Step 1: count islands
  const countIsLands = (): number => {
    const vis = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (x: number, y: number) => {
      vis[x][y] = true;
      for (const [dx, dy] of dirs) {
        const nx = x + dx,
          ny = y + dy;
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1 && !vis[nx][ny]) {
          dfs(nx, ny);
        }
      }
    };

    let cnt = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1 && !vis[i][j]) {
          cnt++;
          dfs(i, j);
        }
      }
    }

    return cnt;
  };
  if (countIsLands() !== 1) return 0;

  // Step 2: count articulation point
  const id = (x: number, y: number) => x * n + y;
  const graph: number[][] = [];
  let total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        total++;
        const u = id(i, j);
        graph[u] = [];
        for (const [dx, dy] of dirs) {
          const nx = i + dx,
            ny = j + dy;
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
            graph[u].push(id(nx, ny));
          }
        }
      }
    }
  }
  if (total === 1) return 1;

  // tarjan algorithm
  const num = Array(m * n).fill(0);
  const low = Array(m * n).fill(0);
  const isCut = Array(m * n).fill(false);
  let time = 0;

  const dfs = (u: number, parent: number) => {
    num[u] = low[u] = ++time;
    let children = 0;
    for (const v of graph[u] || []) {
      if (v === parent) continue;
      if (!num[v]) {
        children++;
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (parent !== -1 && low[v] >= num[u]) {
          isCut[u] = true;
        }
      } else {
        low[u] = Math.min(low[u], num[v]);
      }
    }

    if (parent === -1 && children > 1) isCut[u] = true;
  };

  let start = -1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        start = id(i, j);
      }
    }
  }

  dfs(start, -1);

  const hasCut = isCut.some((x) => x);

  return hasCut ? 1 : 2;
}

const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
console.log(minDays(grid));
