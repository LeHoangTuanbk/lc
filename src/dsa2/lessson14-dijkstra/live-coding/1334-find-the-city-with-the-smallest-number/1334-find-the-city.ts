import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const cons: number[][][] = [];
  for (let i = 0; i < n; i++) {
    cons.push([]);
  }
  for (const e of edges) {
    cons[e[0]].push([e[1], e[2]]);
    cons[e[1]].push([e[0], e[2]]);
  }

  let resIdx = -1,
    best = Infinity;

  for (let i = 0; i < n; i++) {
    const reach = dijkstra(i, n, distanceThreshold, cons);
    if (reach <= best) {
      best = reach;
      resIdx = i;
    }
  }

  return resIdx;
}

export function dijkstra(start: number, n: number, threshold: number, cons: number[][][]): number {
  const dis: number[] = Array(n).fill(Infinity);
  dis[start] = 0;
  const pq = new MinPriorityQueue((a) => a[1]);
  pq.enqueue([start, 0]);

  while (!pq.isEmpty()) {
    const cur = pq.dequeue();
    if (cur[1] > threshold) {
      break;
    }
    for (const u of cons[cur[0]]) {
      const nextDis = cur[1] + u[1];
      if (nextDis < dis[u[0]]) {
        dis[u[0]] = nextDis;
        pq.enqueue([u[0], nextDis]);
      }
    }
  }

  let count = 0;
  for (const d of dis) {
    if (d <= threshold) {
      count++;
    }
  }
  return count;
}

const n = 4,
  edges = [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1],
  ],
  distanceThreshold = 4;

console.log(findTheCity(n, edges, distanceThreshold));
