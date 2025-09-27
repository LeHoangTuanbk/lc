export function diagonalSum(mat: number[][]): number {
  const m = mat.length,
    n = mat[0].length;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }
  if (n % 2 === 1) {
    sum -= mat[Math.floor(m / 2)][Math.floor(n / 2)];
  }

  return sum;
}
