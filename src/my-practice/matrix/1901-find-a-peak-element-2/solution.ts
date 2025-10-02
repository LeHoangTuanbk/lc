export function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length,
    n = mat[0].length;

  let left = 0,
    right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let maxRow = 0;
    for (let i = 1; i < m; i++) {
      if (mat[i][mid] > mat[maxRow][mid]) {
        maxRow = i;
      }
    }

    const peakCandidate = mat[maxRow][mid];

    const leftNeighbor = mid > 0 ? mat[maxRow][mid - 1] : -1;
    const rightNeighbor = mid < n - 1 ? mat[maxRow][mid + 1] : -1;

    if (peakCandidate >= leftNeighbor && peakCandidate >= rightNeighbor) {
      return [maxRow, mid];
    }

    if (leftNeighbor > peakCandidate) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [-1, -1];
}
