export function solveNQueens(n: number): string[][] {
  const res: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill('.'));

  // TODO: Will refactor to outside
  function dfs(col: number): void {
    if (col >= n) {
      const snapshot = board.map((row) => row.join(''));
      res.push(snapshot);
      return;
    }

    for (let row = 0; row < n; row++) {
      if (!canPlace(row, col)) continue;
      board[row][col] = 'Q';
      dfs(col + 1);
      board[row][col] = '.';
    }
  }

  // TODO: Will refactor to outside
  function canPlace(x: number, y: number): boolean {
    // check same row
    for (let i = 0; i < y; i++) {
      if (board[x][i] === 'Q') return false;
    }

    // check left top diagonal
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    // check left bottom diagonal
    for (let i = x + 1, j = y - 1; i < n && j >= 0; i++, j--) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  dfs(0);
  return res;
}

const n = 4;
const expectedOutput = [
  ['.Q..', '...Q', 'Q...', '..Q.'],
  ['..Q.', 'Q...', '...Q', '.Q..'],
];
/* 
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
*/
