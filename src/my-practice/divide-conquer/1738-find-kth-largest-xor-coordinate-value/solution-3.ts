// TODO: use min heap, size k the find kth largest
export function kthLargestValue(matrix: number[][], k: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  const prefixXor: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  const values: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let val = matrix[i][j];
      if (i > 0) val ^= prefixXor[i - 1][j];
      if (j > 0) val ^= prefixXor[i][j - 1];
      if (i > 0 && j > 0) val ^= prefixXor[i - 1][j - 1];
      prefixXor[i][j] = val;
      values.push(val);
    }
  }

  return values.sort((a, b) => b - a)[k - 1];
}
