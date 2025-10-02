export function largestOverlap(img1: number[][], img2: number[][]): number {
  const n = img1.length;
  const points1: [number, number][] = [];
  const points2: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (img1[i][j] === 1) points1.push([i, j]);
      if (img2[i][j] === 1) points2.push([i, j]);
    }
  }

  const shiftCount = new Map<string, number>();
  let ans = 0;

  for (const [x1, y1] of points1) {
    for (const [x2, y2] of points2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const key = `${dx},${dy};`;
      const newCount = (shiftCount.get(key) ?? 0) + 1;
      shiftCount.set(key, newCount);
      ans = Math.max(ans, newCount);
    }
  }

  return ans;
}
