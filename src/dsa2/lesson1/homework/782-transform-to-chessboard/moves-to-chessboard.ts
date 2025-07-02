//References: https://leetcode.com/problems/transform-to-chessboard/solutions/114847/c-java-python-solution-with-explanation/
//Will review later
export function movesToChessboard(board: number[][]): number {
  const n = board.length;
  let rowSum = 0,
    colSum = 0,
    rowSwap = 0,
    colSwap = 0;

  // Step 1: Validate all 2x2 blocks have even parity (b[0][0] ^ b[i][0] ^ b[0][j] ^ b[i][j] == 0)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) !== 0) return -1;
    }
  }

  // Step 2: Compute row/col sum & pattern match count
  for (let i = 0; i < n; i++) {
    rowSum += board[0][i];
    colSum += board[i][0];
    rowSwap += board[i][0] === i % 2 ? 1 : 0;
    colSwap += board[0][i] === i % 2 ? 1 : 0;
  }

  // Step 3: Check row/col sum is valid (either n//2 or (n+1)//2)
  const valid = (x: number) => x === Math.floor(n / 2) || x === Math.ceil(n / 2);
  if (!valid(rowSum) || !valid(colSum)) return -1;

  // Step 4: Adjust swap count based on parity
  if (n % 2 === 1) {
    if (rowSwap % 2 === 1) rowSwap = n - rowSwap;
    if (colSwap % 2 === 1) colSwap = n - colSwap;
  } else {
    rowSwap = Math.min(rowSwap, n - rowSwap);
    colSwap = Math.min(colSwap, n - colSwap);
  }

  return (rowSwap + colSwap) / 2;
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
