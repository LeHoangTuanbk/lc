export function imageSmoother(img: number[][]): number[][] {
  const m = img.length,
    n = img[0].length;
  const imgCopy = img.map((row) => [...row]);
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 1;
      let sum = imgCopy[i][j];
      for (const [dx, dy] of dirs) {
        const newX = i + dx,
          newY = j + dy;
        if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
          count++;
          sum += imgCopy[newX][newY];
        }
      }
      img[i][j] = Math.floor(sum / count);
    }
  }
  return img;
}
