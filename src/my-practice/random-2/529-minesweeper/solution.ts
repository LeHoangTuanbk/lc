export function updateBoard(board: string[][], click: number[]): string[][] {
  const m = board.length;
  const n = board[0].length;

  const [sr, sc] = click;

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

  if (board[sr][sc] == 'M') {
    board[sr][sc] = 'X';
    return board;
  }

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    if (board[r][c] !== 'E') return;

    let mines = 0;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') {
        mines++;
      }
    }
    if (mines > 0) {
      board[r][c] = mines.toString();
      return;
    }

    board[r][c] = 'B';
    for (const [dr, dc] of dirs) {
      dfs(r + dr, c + dc);
    }
  }

  dfs(sr, sc);
  return board;
}
