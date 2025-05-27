const Point = {
  X: 'X',
  O: 'O',
};

const dirs = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

export function solve(board: string[][]): void {
  const n = board.length;
  const m = board[0].length;
  const queue: number[][] = [];
  const visited: boolean[][] = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false),
  );
  for (let i = 0; i < m; i++) {
    if (board[0][i] === Point.O) {
      queue.push([0, i]);
      visited[0][i] = true;
    }
    if (board[n - 1][i] === Point.O) {
      queue.push([n - 1, i]);
      visited[n - 1][i] = true;
    }
  }
  for (let i = 1; i < n - 1; i++) {
    if (board[i][0] === Point.O) {
      queue.push([i, 0]);
      visited[i][0] = true;
    }
    if (board[i][m - 1] === Point.O) {
      queue.push([i, m - 1]);
      visited[i][m - 1] = true;
    }
  }
  while (queue.length) {
    const [i, j] = queue.shift()!;
    for (const [dx, dy] of dirs) {
      const i2 = i + dx,
        j2 = j + dy;
      if (i2 >= 0 && j2 >= 0 && i2 < n && j2 < m && !visited[i2][j2] && board[i2][j2] === Point.O) {
        queue.push([i2, j2]);
        visited[i2][j2] = true;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] == Point.O) {
        board[i][j] = Point.X;
      }
    }
  }
}

/**
 * Space may be optimized by using a temp value: board[i][j] = "T" when visit. Finally, check T -> change to O, check O, flip to X
 * Pattern: Boundary BFS
 */
