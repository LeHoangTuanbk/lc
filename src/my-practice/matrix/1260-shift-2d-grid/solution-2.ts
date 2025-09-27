export function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length,
    n = grid[0].length;
  const total = m * n;
  k %= total;

  const shiftedGrid: number[][] = Array.from({ length: m }, () => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      const newIndex = (index + k) % total;
      const newRow = Math.floor(newIndex / n);
      const newCol = newIndex % n;
      shiftedGrid[newRow][newCol] = grid[i][j];
    }
  }

  return shiftedGrid;
}
