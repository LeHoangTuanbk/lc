export function candyCrush(board: number[][]) {
  const R = board.length,
    C = board[0].length;

  while (true) {
    let crush = false;
    const mark: boolean[][] = Array.from({ length: R }, () => Array(C).fill(false));

    // 1. Find by horizontal
    for (let r = 0; r < R; r++) {
      for (let c = 0; c + 2 < C; c++) {
        const v = board[r][c];
        if (v !== 0 && board[r][c + 1] === v && board[r][c + 2] === v) {
          mark[r][c] = mark[r][c + 1] = mark[r][c + 2] = true;
          crush = true;
        }
      }
    }

    // 2. Find by vertical
    for (let c = 0; c < C; c++) {
      for (let r = 0; r + 2 < R; r++) {
        const v = board[r][c];
        if (v !== 0 && v === board[r + 1][c] && v === board[r + 2][c]) {
          mark[r][c] = mark[r + 1][c] = mark[r + 2][c] = true;
          crush = true;
        }
      }
    }

    if (!crush) break;

    // 3. Crush -> set 0
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (mark[r][c]) {
          board[r][c] = 0;
        }
      }
    }

    // 4. Gravity
    for (let c = 0; c < C; c++) {
      let write = R - 1;
      for (let r = R - 1; r >= 0; r--) {
        if (board[r][c] > 0) {
          board[write][c] = board[r][c];
          if (write !== r) board[r][c] = 0;
          write--;
        }
      }
    }
  }

  return board;
}
