export function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;
  let lo = matrix[0][0],
    hi = matrix[n - 1][n - 1];
  let ans = lo;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const count = countLessThanOrEqual(matrix, mid);
    if (count >= k) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans;
}

function countLessThanOrEqual(matrix: number[][], target: number): number {
  const n = matrix.length;
  let count = 0,
    col = n - 1;
  for (let row = 0; row < n; row++) {
    while (col >= 0 && matrix[row][col] > target) {
      col--;
    }
    count += col + 1;
  }
  return count;
}

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;

console.log(kthSmallest(matrix, k));
