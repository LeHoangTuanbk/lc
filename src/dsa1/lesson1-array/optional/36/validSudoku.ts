const emptyCell = '.';

export function isValidSudoku(board: string[][]): boolean {
  //Check rows and  columns
  for (let i = 0; i < board.length; i++) {
    const currentRow = board[i];
    const currentColumn = getBoardColumn(board, i);

    if (!isValidSudokuString(currentRow) || !isValidSudokuString(currentColumn)) {
      return false;
    }
  }
  //Check 3*3 sub boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const currentBox = getSubBox(board, i, j).flat();
      if (!isValidSudokuString(currentBox)) {
        return false;
      }
    }
  }
  return true;
}

function isValidSudokuString(sudokuString: string[]): boolean {
  const sudokuNumber = sudokuString.filter((character) => character != emptyCell);
  return new Set(sudokuNumber).size === sudokuNumber.length;
}

function getBoardColumn(board: string[][], columnIndex: number): string[] {
  return board.map((row) => row[columnIndex]);
}

function getSubBox(board: string[][], startRow: number, startCol: number): string[][] {
  return board.slice(startRow, startRow + 3).map((row) => row.slice(startCol, startCol + 3));
}
