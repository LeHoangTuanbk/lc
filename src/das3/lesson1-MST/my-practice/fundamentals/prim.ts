import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [u: number, v: number, w: number];
type Graph = Map<number, [to: number, weight: number][]>;

export function primMST(n: number, edges: Edge[]): number {
  const graph: Graph = new Map();

  for (let i = 0; i < n; i++) graph.set(i, []);
  for (const [u, v, w] of edges) {
    graph.get(u).push([v, w]);
    graph.get(v).push([u, w]);
  }

  const visited = new Set<number>();
  const pq = new MinPriorityQueue<{ node: number; weight: number }>({
    compare: (a, b) => a.weight - b.weight,
  });

  pq.enqueue({ node: 0, weight: 0 });
  let total = 0;

  while (!pq.isEmpty() && visited.size < n) {
    const { node: u, weight: w } = pq.dequeue();
    if (visited.has(u)) continue;

    visited.add(u);
    total += w;

    for (const [v, cost] of graph.get(u)) {
      if (!visited.has(v)) {
        pq.enqueue({ node: v, weight: cost });
      }
    }
  }

  return visited.size === n ? total : Infinity;
}

const edges: [number, number, number][] = [
  [0, 1, 4],
  [0, 2, 3],
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 4],
  [3, 4, 2],
  [4, 5, 6],
];

const n = 6; // 6 nodes from 0 to 5

console.log(primMST(n, edges));
