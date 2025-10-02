export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = n - 1;

  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}
