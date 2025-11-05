export function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][],
): number {
  const graph = Array.from({ length: m }, () => Array(n).fill(0));
  // 1: guards, 2: walls, 3: visited
  for (const [r, c] of guards) {
    graph[r][c] = 1;
  }

  for (const [r, c] of walls) {
    graph[r][c] = 2;
  }

  const Dirs = {
    Right: 'right',
    Left: 'left',
    Up: 'up',
    Down: 'down',
  };

  type Dirs = (typeof Dirs)[keyof typeof Dirs];

  function dfs(r: number, c: number, dir: Dirs) {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (graph[r][c] == 1 || graph[r][c] == 2) return;
    graph[r][c] = 3;
    if (dir === Dirs.Left) dfs(r, c - 1, dir);
    else if (dir === Dirs.Right) dfs(r, c + 1, dir);
    else if (dir === Dirs.Down) dfs(r + 1, c, dir);
    else dfs(r - 1, c, dir);
  }

  for (const [r, c] of guards) {
    dfs(r, c + 1, Dirs.Right);
    dfs(r, c - 1, Dirs.Left);
    dfs(r + 1, c, Dirs.Down);
    dfs(r - 1, c, Dirs.Up);
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 0) {
        count++;
      }
    }
  }

  return count;
}

const m = 4,
  n = 6,
  guards = [
    [0, 0],
    [1, 1],
    [2, 3],
  ],
  walls = [
    [0, 1],
    [2, 2],
    [1, 4],
  ];
console.log(countUnguarded(m, n, guards, walls));
