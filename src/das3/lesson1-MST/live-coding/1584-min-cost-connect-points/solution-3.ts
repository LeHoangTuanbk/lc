function distance(p1: number[], p2: number[]) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const inMST = Array(n).fill(false);
  const minDist = Array(n).fill(Infinity);
  minDist[0] = 0;

  let total = 0;

  for (let step = 0; step < n; step++) {
    // 1. Find vertice is not in MST, with min dist
    let u = -1;
    let best = Infinity;
    for (let i = 0; i < n; i++) {
      if (!inMST[i] && minDist[i] < best) {
        best = minDist[i];
        u = i;
      }
    }

    // 2. Put u to MST
    inMST[u] = true;
    total += best;

    // 3. Update MinDist
    for (let v = 0; v < n; v++) {
      if (!inMST[v]) {
        minDist[v] = Math.min(minDist[v], distance(points[u], points[v]));
      }
    }
  }

  return total;
}
