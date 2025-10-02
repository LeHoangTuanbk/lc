export function numMagicSquaresInside(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  let res = 0;
  for (let i = 0; i <= m - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
      if (checkMagicSquares(grid, i, j)) {
        res++;
      }
    }
  }
  return res;
}

function checkMagicSquares(grid: number[][], i: number, j: number) {
  if (grid[i + 1][j + 1] !== 5) return false;

  const n = 3;
  let sum = 15;
  let mask = 0;
  for (let x = 0; x < n; x++) {
    let rowSum = 0;
    let colSum = 0;
    for (let y = 0; y < n; y++) {
      const v = grid[x + i][y + j];
      if (v < 1 || v > 9) return false;
      mask |= 1 << v;
      rowSum += v;
      colSum += grid[y + i][x + j];
    }
    if (rowSum !== sum || colSum !== sum) return false;
  }

  if (mask !== 0b1111111110) return false;

  const firstDiagonal = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
  if (firstDiagonal !== sum) return false;
  const secondDiagonal = grid[i + 2][j] + grid[i + 1][j + 1] + grid[i][j + 2];
  if (secondDiagonal !== sum) return false;

  return true;
}

const grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];
console.log(numMagicSquaresInside(grid));
