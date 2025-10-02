export function kthSmallest(matrix: number[][], k: number): number {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
}

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;

console.log(kthSmallest(matrix, k));
