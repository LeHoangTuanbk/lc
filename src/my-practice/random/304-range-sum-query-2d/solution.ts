export class NumMatrix {
  private prefixSum: number[][];
  constructor(matrix: number[][]) {
    const m = matrix.length,
      n = matrix[0].length;

    this.prefixSum = Array.from({ length: m }, () => Array(n).fill(0));
    this.prefixSum[0][0] = matrix[0][0];
    for (let i = 0; i < m; i++) this.prefixSum[i][0] = this.prefixSum[i - 1][0] + matrix[i][0];
    for (let j = 0; j < n; j++) this.prefixSum[0][j] = this.prefixSum[0][j - 1] + matrix[0][j];

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        this.prefixSum[i][j] =
          matrix[i][j] +
          this.prefixSum[i - 1][j] +
          this.prefixSum[i][j - 1] -
          this.prefixSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const preS = this.prefixSum;

    return (
      preS[row2][col2] -
      (row1 > 0 ? preS[row1 - 1][col2] : 0) -
      (col1 > 0 ? preS[row2][col1 - 1] : 0) +
      (row1 > 0 && col1 > 0 ? preS[row1 - 1][col1 - 1] : 0)
    );
  }
}
