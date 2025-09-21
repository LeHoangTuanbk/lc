function distance(d1: number[], d2: number[]) {
  return Math.abs(d1[0] - d2[0]) + Math.abs(d1[1] - d2[1]);
}

export function minCostConnectPoints(points: number[][]): number {
  let cost = 0;
  const n = points.length;
  const inMst = Array(n).fill(false);
  const dist = Array(n).fill(Infinity);
  dist[0] = 0;

  for (let i = 0; i < n; i++) {
    // let minJ = -1;
    let minI = -1;
    let minV = Infinity;

    for (let i = 0; i < dist.length; i++) {
      if (!inMst[i] && dist[i] < minV) {
        minV = dist[i];
        minI = i;
      }
    }

    inMst[minI] = true;
    cost += dist[minI];
    const p = points[minI];
    for (let j = 0; j < points.length; j++) {
      if (!inMst[j]) {
        dist[j] = Math.min(dist[j], distance(p, points[j]));
      }
    }
  }
  return cost;
}

const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];

console.log(minCostConnectPoints(points));
// expect().toBe(20);
