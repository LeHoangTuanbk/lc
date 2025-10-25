import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [to: number, weight: number];

export function dijkstra(n: number, graph: Edge[][], start: number): number[] {
  const dist = Array(n).fill(Infinity);
  dist[start] = 0;

  const heap = new MinPriorityQueue<{ node: number; cost: number }>({
    compare: (a, b) => a.cost - b.cost,
  });

  heap.enqueue({ node: start, cost: 0 });

  while (!heap.isEmpty()) {
    const { node: u, cost: d } = heap.dequeue();

    for (const [v, w] of graph[u]) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        heap.enqueue({ node: v, cost: dist[v] });
      }
    }
  }

  return dist;
}

const graph: Edge[][] = [
  [
    [1, 2],
    [2, 4],
  ],
  [[2, 1]],
  [],
];
const n = 3,
  source = 0;
console.log(dijkstra(n, graph, source));
