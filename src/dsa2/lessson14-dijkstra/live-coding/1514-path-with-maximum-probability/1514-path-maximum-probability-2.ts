import { PriorityQueue } from '@datastructures-js/priority-queue';

class Point {
  public idx: number;
  public prob: number;
  constructor(idx: number, prob: number) {
    this.idx = idx;
    this.prob = prob;
  }
}

export function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number,
): number {
  const graph: Point[][] = Array.from({ length: n }, () => []);

  // Build undirected weighted graph
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const p = succProb[i];
    graph[u].push(new Point(v, p));
    graph[v].push(new Point(u, p));
  }

  // Max-heap by probability
  const pq = new PriorityQueue<Point>((a: Point, b: Point) => (a.prob <= b.prob ? 1 : -1));

  const dist: number[] = Array(n).fill(0);
  dist[start_node] = 1.0;

  pq.enqueue(new Point(start_node, 1.0));

  while (!pq.isEmpty()) {
    const cur = pq.dequeue();
    const u = cur.idx;
    const p = cur.prob;

    if (u === end_node) return p;

    if (p < dist[u]) continue;

    for (const v of graph[u]) {
      const nextProb = p * v.prob;
      if (nextProb > dist[v.idx]) {
        dist[v.idx] = nextProb;
        pq.enqueue(new Point(v.idx, nextProb));
      }
    }
  }

  return 0.0;
}
