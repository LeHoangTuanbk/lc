export function kClosest(points: number[][], k: number): number[][] {
  const pointsWithD: [number, number, number][] = [];
  for (const [x, y] of points) {
    const dSquare = x * x + y * y;
    pointsWithD.push([dSquare, x, y]);
  }
  return pointsWithD
    .sort((a, b) => a[0] - b[0])
    .slice(0, k)
    .map(([_, x, y]) => [x, y]);
}
const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
console.log(kClosest(points, k));
