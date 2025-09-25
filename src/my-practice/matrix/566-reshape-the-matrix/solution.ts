export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) return mat;
  const val: number[] = [];

  for (const row of mat) {
    val.push(...row);
  }
  const res: number[][] = [];
  for (let i = 0; i < r; i++) {
    res.push(val.slice(c * i, c * (i + 1)));
  }
  return res;
}

const mat = [
    [1, 2],
    [3, 4],
  ],
  r = 1,
  c = 4;

console.log(matrixReshape(mat, r, c));
