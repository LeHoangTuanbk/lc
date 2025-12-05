export function kClosest(points: number[][], k: number): number[][] {
  return points
    .sort((a, b) => {
      const da = a[0] * a[0] + a[1] * a[1];
      const db = b[0] * b[0] + b[1] * b[1];
      return da - db;
    })
    .slice(0, k);
}
const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
console.log(kClosest(points, k));
