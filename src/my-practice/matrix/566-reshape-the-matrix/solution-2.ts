export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length,
    n = mat[0].length;
  if (m * n !== r * c) return mat;

  const res: number[][] = Array.from({ length: r }, () => Array(c));
  for (let i = 0; i < m * n; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    const newRow = Math.floor(i / c);
    const newCol = i % c;
    res[newRow][newCol] = mat[row][col];
  }

  return res;
}
