export function imageSmoother(img: number[][]): number[][] {
  const m = img.length,
    n = img[0].length;
  const res = Array.from({ length: m }, () => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0;
      let sum = 0;

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const newX = i + dr,
            newY = j + dc;
          if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
            count++;
            sum += img[newX][newY];
          }
        }
      }

      res[i][j] = Math.floor(sum / count);
    }
  }
  return res;
}
