import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function minCost(maxTime: number, edges: number[][], passingFees: number[]): number {
  const n = passingFees.length;
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, t] of edges) {
    graph[u].push([v, t]);
    graph[v].push([u, t]);
  }

  const dist = Array.from({ length: n }, () => Array(maxTime + 1).fill(Infinity));
  dist[0][0] = passingFees[0];

  const pq = new MinPriorityQueue<{ node: number; time: number; cost: number }>({
    compare: (a, b) => a.cost - b.cost,
  });
  pq.enqueue({ node: 0, time: 0, cost: passingFees[0] });

  while (!pq.isEmpty()) {
    const { node, time, cost } = pq.dequeue();
    if (node === n - 1) return cost;
    if (cost > dist[node][time]) continue;
    for (const [v, t] of graph[node]) {
      const newTime = time + t;
      if (newTime > maxTime) continue;

      const newCost = cost + passingFees[v];
      if (newCost < dist[v][newTime]) {
        dist[v][newTime] = newCost;
        pq.enqueue({ node: v, time: newTime, cost: newCost });
      }
    }
  }

  return -1;
}

// Time: O((V + E) * maxTime * log(V * maxTime))
