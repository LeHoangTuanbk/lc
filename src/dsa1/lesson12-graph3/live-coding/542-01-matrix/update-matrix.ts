export function updateMatrix(mat: number[][]): number[][] {
  const n = mat.length;
  const m = mat[0].length;
  const queue: number[][] = [];
  const distance: number[][] = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Infinity));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!mat[i][j]) {
        queue.push([i, j]);
        distance[i][j] = 0;
      }
    }
  }
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (queue.length) {
    const [i, j] = queue.shift()!;
    for (const [dx, dy] of directions) {
      const i2 = i + dx;
      const j2 = j + dy;
      if (i2 >= 0 && j2 >= 0 && i2 < n && j2 < m && distance[i2][j2] === Infinity) {
        queue.push([i2, j2]);
        distance[i2][j2] = distance[i][j] + 1;
      }
    }
  }
  return distance;
}
