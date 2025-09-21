import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function distance(p1: number[], p2: number[]) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const visited = Array<boolean>(n).fill(false);
  const minDist = Array(n).fill(Infinity);
  minDist[0] = 0;

  let total = 0;

  const pq = new MinPriorityQueue<{ i: number; cost: number }>((item) => item.cost);
  pq.enqueue({ i: 0, cost: 0 });

  while (!pq.isEmpty()) {
    const { i: u, cost } = pq.dequeue();
    if (visited[u]) continue;

    visited[u] = true;
    total += cost;

    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        const newCost = distance(points[u], points[v]);
        if (newCost < minDist[v]) {
          minDist[v] = newCost;
          pq.enqueue({ i: v, cost: newCost });
        }
      }
    }
  }

  return total;
}
