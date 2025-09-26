export function transpose(matrix: number[][]): number[][] {
  const m = matrix.length,
    n = matrix[0].length;
  const res: number[][] = Array.from({ length: n }, () => Array(m));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));
