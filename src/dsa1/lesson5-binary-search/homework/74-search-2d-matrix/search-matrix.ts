export function searchMatrix2(matrix: number[][], target: number): boolean {
  const newMatrix = matrix.flat();
  let low = 0,
    high = newMatrix.length - 1,
    mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (newMatrix[mid] === target) return true;
    if (newMatrix[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let low = 0,
    high = m * n - 1,
    mid;

  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    const row = Math.floor(mid / n);
    const column = mid % n;
    const midVal = matrix[row][column];
    if (midVal == target) return true;
    if (midVal < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
