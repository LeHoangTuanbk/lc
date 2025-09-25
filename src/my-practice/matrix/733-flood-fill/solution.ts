type Point = [number, number];
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const m = image.length,
    n = image[0].length;

  const queue: Point[] = [];
  queue.push([sr, sc]);
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  image[sr][sc] = color;

  while (queue.length) {
    const [r, c] = queue.shift();
    for (const [dr, dc] of dirs) {
      const newR = r + dr;
      const newC = c + dc;
      if (!isInSide(m, n, newR, newC)) continue;
      if (originalColor != image[newR][newC]) continue;
      if (image[newR][newC] === color) continue;

      queue.push([newR, newC]);
      image[newR][newC] = color;
    }
  }

  return image;
}

function isInSide(m: number, n: number, r: number, c: number) {
  return 0 <= r && r < m && 0 <= c && c < n;
}

const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;
console.log(floodFill(image, sr, sc, color));
