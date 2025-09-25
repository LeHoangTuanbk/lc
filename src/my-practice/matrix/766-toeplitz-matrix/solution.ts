export function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length,
    n = matrix[0].length;

  if (m == 1 || n == 1) return true;

  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m && i + j < n; i++) {
      if (matrix[i][i + j] !== matrix[0][j]) {
        return false;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n && j + i < m; j++) {
      if (matrix[i + j][j] !== matrix[i][0]) {
        return false;
      }
    }
  }

  return true;
}

const matrix = [
  [1, 2, 3],
  [4, 1, 2],
  [5, 9, 1], // 👈 Lẽ ra phải là 3 để đúng Toeplitz
];

console.log(isToeplitzMatrix(matrix));
