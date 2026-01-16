export class NumMatrix {
  private prefixSum: number[][];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;
    this.prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.prefixSum[i][j] =
          matrix[i - 1][j - 1] +
          this.prefixSum[i - 1][j] +
          this.prefixSum[i][j - 1] -
          this.prefixSum[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const p = this.prefixSum;
    return p[row2 + 1][col2 + 1] - p[row1][col2 + 1] - p[row2 + 1][col1] + p[row1][col1];
  }
}
