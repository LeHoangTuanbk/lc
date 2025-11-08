export function exist(board: string[][], word: string): boolean {
  const m = board.length,
    n = board[0].length;

  function backtrack(r: number, c: number, idx: number): boolean {
    if (idx >= word.length) return true;
    if (r < 0 || c < 0 || r >= m || c >= n) return false;
    if (board[r][c] !== word[idx]) return false;
    const temp = board[r][c];
    board[r][c] = '#';

    const found =
      backtrack(r + 1, c, idx + 1) ||
      backtrack(r, c + 1, idx + 1) ||
      backtrack(r - 1, c, idx + 1) ||
      backtrack(r, c - 1, idx + 1);

    board[r][c] = temp;
    return found;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (backtrack(i, j, 0)) return true;
      }
    }
  }

  return false;
}

const board = [
    ['a', 'b'],
    ['c', 'd'],
  ],
  word = 'acdb';
console.log(exist(board, word));
