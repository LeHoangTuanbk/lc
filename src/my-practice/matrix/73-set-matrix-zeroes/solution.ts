export function setZeroes(matrix: number[][]): void {
  const colSet = new Set<number>();
  const rowSet = new Set<number>();

  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }

  for (const col of colSet.values()) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }

  for (const row of rowSet.values()) {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  }
}
