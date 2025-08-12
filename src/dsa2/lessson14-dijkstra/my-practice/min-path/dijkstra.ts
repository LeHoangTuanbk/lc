import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import { buildGraph, Edge, reconstructPath } from './helper';

export function dijkstra(graph: Edge[][], start: number) {
  const n = graph.length;
  const dist = Array<number>(n).fill(Infinity);
  const parent = Array<number>(n).fill(-1);

  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);

  dist[start] = 0;
  pq.enqueue({ u: start, d: 0 });

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();
    if (d !== dist[u]) continue;
    for (const [v, w] of graph[u]) {
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        parent[v] = u;
        pq.enqueue({ u: v, d: nd });
      }
    }
  }
  return { dist, parent };
}

export function dijkstra2(graph: Edge[][], start: number) {
  const n = graph.length;
  const dist = Array<number>(n).fill(Infinity);
  const parent = Array<number>(n).fill(-1);

  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);
  const visited = Array<boolean>(n).fill(false);

  dist[start] = 0;
  pq.enqueue({ u: start, d: 0 });

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();
    if (visited[u]) continue;
    visited[u] = true;
    if (d !== dist[u]) continue;
    for (const [v, w] of graph[u]) {
      if (visited[v]) continue;
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        parent[v] = u;
        pq.enqueue({ u: v, d: nd });
      }
    }
  }
  return { dist, parent };
}

const edges: [number, number, number][] = [
  [0, 1, 2],
  [0, 2, 4],
  [1, 2, 1],
  [1, 3, 7],
  [2, 4, 3],
  [3, 4, 1],
];

const g = buildGraph(5, edges, true);

const { dist, parent } = dijkstra2(g, 0);
console.log('dist', dist);
console.log('parent', parent);
console.log('Path from 0 to 4: ', reconstructPath(parent, 0, 4));
