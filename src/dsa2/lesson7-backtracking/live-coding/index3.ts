export function solveSudoku(board: string[][]): void {
  function dfs(x: number, y: number): boolean {
    if (x >= 9) return true;

    const [nx, ny] = chooseNext(x, y);

    if (board[x][y] !== '.') {
      return dfs(nx, ny);
    }

    const remove = Array(10).fill(false); // remove[i] = true if i cannot be used
    removeCandidate(x, y, remove);

    for (let num = 1; num <= 9; num++) {
      if (remove[num]) continue;

      board[x][y] = num.toString();
      if (dfs(nx, ny)) return true;
      board[x][y] = '.'; // backtrack
    }

    return false;
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

  function chooseNext(x: number, y: number): [number, number] {
    if (y === 8) return [x + 1, 0];
    return [x, y + 1];
  }

  dfs(0, 0);
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
/* 
Bài này các lựa chọn cho các số ở mỗi vị trí trống khó code ghê. 

Bài này em mới nghĩ ra cách mỗi trạng thái duyệt hết matrix 9*9 rồi thử từ 1 đến 9, check valid thì đi tiếp. Có vẻ states lớn.

9 * 9!;

*/
