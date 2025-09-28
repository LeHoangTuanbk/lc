/**
 Do not return anything, modify board in-place instead.
 */
export function gameOfLife(board: number[][]): void {
  const m = board.length,
    n = board[0].length;
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const copy = board.map((row) => [...row]);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;

      for (const [dx, dy] of dirs) {
        const x = i + dx,
          y = j + dy;
        if (x >= 0 && x < m && y >= 0 && y < n && copy[x][y] === 1) {
          live++;
        }
      }

      if (copy[i][j] === 1) {
        if (live < 2 || live > 3) board[i][j] = 0;
        else board[i][j] = 1;
      } else {
        if (live === 3) board[i][j] = 1;
        else board[i][j] = 0;
      }
    }
  }
}
