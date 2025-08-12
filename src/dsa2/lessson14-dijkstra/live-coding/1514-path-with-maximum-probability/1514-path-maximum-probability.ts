import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [number, number];

export function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number,
): number {
  const graph: Edge[][] = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push([edges[i][1], succProb[i]]);
    graph[edges[i][1]].push([edges[i][0], succProb[i]]);
  }

  const prob: number[] = Array(n).fill(0);
  const pq = new MaxPriorityQueue<{ u: number; p: number }>((x) => x.p);

  prob[start_node] = 1;
  pq.enqueue({ u: start_node, p: 1 });

  while (!pq.isEmpty()) {
    const { u, p } = pq.dequeue();

    for (const [v, w] of graph[u]) {
      const nextProb = p * w;
      if (nextProb > prob[v]) {
        prob[v] = nextProb;
        pq.enqueue({ u: v, p: nextProb });
      }
    }
  }

  return prob[end_node];
}

const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.2],
  start = 0,
  end = 2;

console.log(maxProbability(n, edges, succProb, start, end));
