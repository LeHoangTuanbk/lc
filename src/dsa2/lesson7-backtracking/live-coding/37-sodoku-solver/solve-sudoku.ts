export function solveSudoku(board: string[][]): void {
  function dfs(x: number, y: number): boolean {
    if (x >= 9) return true;

    const [nx, ny] = chooseNext(x, y);

    if (board[x][y] !== '.') {
      return dfs(nx, ny);
    }

    const remove = Array(10).fill(false);
    removeCandidate(x, y, remove);

    for (let num = 1; num <= 9; num++) {
      if (remove[num]) continue;

      board[x][y] = num.toString();
      if (dfs(nx, ny)) return true;
      board[x][y] = '.';
    }

    return false;
  }

  function chooseNext(x: number, y: number): [number, number] {
    if (y === 8) return [x + 1, 0];
    return [x, y + 1];
  }

  function removeCandidate(x: number, y: number, remove: boolean[]) {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] !== '.') {
        remove[+board[x][i]] = true;
      }
      if (board[i][y] !== '.') {
        remove[+board[i][y]] = true;
      }
    }

    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        if (board[i][j] !== '.') {
          remove[+board[i][j]] = true;
        }
      }
    }
  }

  dfs(0, 0);
}

export function solveSudokuAllSolutions(board: string[][]): string[][][] {
  const res: string[][][] = [];

  function dfs(x: number, y: number): void {
    if (x >= 9) {
      // Deep copy kết quả
      res.push(board.map((row) => [...row]));
      return;
    }

    const [nx, ny] = chooseNext(x, y);

    if (board[x][y] !== '.') {
      dfs(nx, ny);
      return;
    }

    const remove = Array(10).fill(false);
    removeCandidate(x, y, remove);

    for (let num = 1; num <= 9; num++) {
      if (remove[num]) continue;

      board[x][y] = num.toString();
      dfs(nx, ny);
      board[x][y] = '.'; // backtrack
    }
  }

  function chooseNext(x: number, y: number): [number, number] {
    return y === 8 ? [x + 1, 0] : [x, y + 1];
  }

  function removeCandidate(x: number, y: number, remove: boolean[]): void {
    for (let i = 0; i < 9; i++) {
      if (board[x][i] !== '.') {
        remove[+board[x][i]] = true;
      }
      if (board[i][y] !== '.') {
        remove[+board[i][y]] = true;
      }
    }

    const startX = Math.floor(x / 3) * 3;
    const startY = Math.floor(y / 3) * 3;
    for (let i = startX; i < startX + 3; i++) {
      for (let j = startY; j < startY + 3; j++) {
        if (board[i][j] !== '.') {
          remove[+board[i][j]] = true;
        }
      }
    }
  }

  dfs(0, 0);
  return res;
}

export function solveSudoku2(board: string[][]): void {
  backtrack(board, 0, 0);

  function backtrack(board: string[][], row: number, col: number): boolean {
    for (let i = row; i < 9; i++, col = 0) {
      for (let j = col; j < 9; j++) {
        if (board[i][j] !== '.') continue;

        for (let ch = 1; ch <= 9; ch++) {
          const num = ch.toString();
          if (isValid(board, i, j, num)) {
            board[i][j] = num;
            if (backtrack(board, i, j + 1)) return true;
            board[i][j] = '.';
          }
        }

        return false; // No valid digit fits
      }
    }
    return true; // Reached end
  }

  function isValid(board: string[][], row: number, col: number, num: string): boolean {
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) return false;
      const br = blockRow + Math.floor(i / 3);
      const bc = blockCol + (i % 3);
      if (board[br][bc] === num) return false;
    }

    return true;
  }
}
