export function matrixElementsSum(matrix: number[][]): number {
  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        for (let k = i + 1; k < m; k++) {
          matrix[k][j] = 0;
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] != 0) {
        res += matrix[i][j];
      }
    }
  }

  return res;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(matrixElementsSum(matrix));
