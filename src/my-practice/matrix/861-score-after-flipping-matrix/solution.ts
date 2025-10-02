export function matrixScore(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  // 1. Flip first column
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] ^= 1;
      }
    }
  }

  // 2. Flip from 1 -> n - 1
  for (let j = 1; j < n; j++) {
    let ones = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) {
        ones++;
      }
    }
    if (ones < m - ones) {
      for (let i = 0; i < m; i++) {
        grid[i][j] ^= 1;
      }
    }
  }

  // 3. Sum score
  let score = 0;
  for (let i = 0; i < m; i++) {
    let rowVal = 0;
    for (let j = 0; j < n; j++) {
      rowVal = (rowVal << 1) | grid[i][j];
    }
    score += rowVal;
  }
  return score;
}
