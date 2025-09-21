import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const visited = new Set<number>();
  const minDist = Array(n).fill(Infinity);
  minDist[0] = 0;

  let total = 0;

  const pq = new MinPriorityQueue<{ i: number; cost: number }>({
    compare: (a, b) => a.cost - b.cost,
  });

  pq.enqueue({ i: 0, cost: 0 });

  while (!pq.isEmpty() && visited.size < n) {
    const { i: u, cost } = pq.dequeue();
    if (visited.has(u)) continue;

    visited.add(u);
    total += cost;

    for (let v = 0; v < n; v++) {
      if (!visited.has(v)) {
        const newCost =
          Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
        if (newCost < minDist[v]) {
          minDist[v] = newCost;
          pq.enqueue({ i: v, cost: newCost });
        }
      }
    }
  }

  return total;
}
