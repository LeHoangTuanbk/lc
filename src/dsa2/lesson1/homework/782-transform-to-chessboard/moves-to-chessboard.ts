export function movesToChessboard(board: number[][]): number {
  const n = board.length;

  const toBitString = (row: number[]) => row.join('');
  //Step 1:
  const rowSet = new Set(board.map(toBitString));
  if (rowSet.size !== 2) return -1;

  const [rowA, rowB] = Array.from(rowSet).map((str) => [...str].map(Number));
  if (!isComplement(rowA, rowB)) return -1;

  const colSet = new Set(Array.from({ length: n }, (_, j) => board.map((row) => row[j]).join('')));
  if (colSet.size !== 2) return -1;
  const [colA, colB] = Array.from(colSet).map((str) => [...str].map(Number));
  if (!isComplement(colA, colB)) return -1;

  //Step 2:
  const rowCount = board.reduce((sum, row) => sum + Number(equals(row, rowA)), 0);
  const colCount = board[0]
    .map((_, j) => board.map((r) => r[j]))
    .reduce((sum, col) => sum + Number(equals(col, colA)), 0);

  if (!isValidBalance(rowCount, n) || !isValidBalance(colCount, n)) return -1;

  const rowSwaps = countSwaps(rowA, n);
  const colSwaps = countSwaps(colA, n);

  return rowSwaps + colSwaps;
}

function isComplement(rowA: number[], rowB: number[]): boolean {
  return rowA.every((val, i) => (val ^ rowB[1]) === 1);
}

function equals(a: number[], b: number[]): boolean {
  return a.every((v, i) => v === b[i]);
}

function isValidBalance(count: number, n: number): boolean {
  return count === Math.floor(n / 2) || count === Math.ceil(n / 2);
}

function countSwaps(line: number[], n: number): number {
  const mismatch = (start: 0 | 1) =>
    line.reduce((cnt, bit, i) => cnt + (bit !== (i + start) % 2 ? 1 : 0), 0);

  const ones = line.reduce((sum, bit) => sum + bit, 0);
  if (n % 2 === 0) {
    return Math.min(mismatch(0), mismatch(1) / 2);
  } else {
    const expectedStart = ones * 2 > n ? 1 : 0;
    return mismatch(expectedStart as 0 | 1) / 2;
  }
}

const board = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
];

console.log(movesToChessboard(board));

/* 
Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation: One potential sequence of moves is shown.
The first move swaps the first and second column.
The second move swaps the second and third row.


Input: board = [[1,0],[1,0]]
Output: -1
Explanation: No matter what sequence of moves you make, you cannot end with a valid chessboard.
*/
