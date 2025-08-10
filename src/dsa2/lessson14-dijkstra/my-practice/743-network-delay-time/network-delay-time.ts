import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [to: number, w: number];

export function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: Edge[][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of times) graph[u - 1].push([v - 1, w]);

  const dist = Array(n).fill(Infinity);
  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);

  dist[k - 1] = 0;
  pq.enqueue({ u: k - 1, d: 0 });

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();
    if (d !== dist[u]) continue;
    for (const [v, w] of graph[u]) {
      const newD = d + w;
      if (newD < dist[v]) {
        dist[v] = newD;
        pq.enqueue({ u: v, d: newD });
      }
    }
  }

  const ans = Math.max(...dist);
  return ans === Infinity ? -1 : ans;
}
