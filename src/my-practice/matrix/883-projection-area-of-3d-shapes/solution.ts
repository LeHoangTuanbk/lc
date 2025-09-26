export function projectionArea(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  // size of grid
  let xyArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        xyArea++;
      }
    }
  }

  // max in column
  let yzArea = 0;
  for (let j = 0; j < n; j++) {
    let maxColumnValue = -Infinity;
    for (let i = 0; i < m; i++) {
      maxColumnValue = Math.max(maxColumnValue, grid[i][j]);
    }
    yzArea += maxColumnValue;
  }

  // max in row
  const zxArea = grid.map((item) => Math.max(...item)).reduce((a, b) => a + b, 0);

  return xyArea + yzArea + zxArea;
}

const grid = [
  [1, 0],
  [0, 2],
];

console.log(projectionArea(grid));
