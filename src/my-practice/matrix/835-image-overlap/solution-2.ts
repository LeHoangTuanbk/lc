function largestOverlap(img1: number[][], img2: number[][]): number {
  const n = img1.length;

  let maxOverlap = 0;
  for (let dx = -(n - 1); dx < n; dx++) {
    for (let dy = -(n - 1); dy < n; dy++) {
      let overlap = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          const newI = i + dx;
          const newY = j + dy;
          if (
            newI >= 0 &&
            newI < n &&
            newY >= 0 &&
            newY < n &&
            img1[newI][newY] === 1 &&
            img1[newI][newY] === img2[i][j]
          ) {
            overlap++;
          }
        }
      }
      maxOverlap = Math.max(overlap, maxOverlap);
    }
  }
  return maxOverlap;
}

const img1 = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  img2 = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 1],
  ];
console.log(largestOverlap(img1, img2));
