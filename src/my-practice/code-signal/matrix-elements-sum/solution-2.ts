export function matrixElementsSum(matrix: number[][]): number {
  const m = matrix.length,
    n = matrix[0].length;
  let sum = 0;

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (matrix[i][j] === 0) break;
      sum += matrix[i][j];
    }
  }

  return sum;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

console.log(matrixElementsSum(matrix));
