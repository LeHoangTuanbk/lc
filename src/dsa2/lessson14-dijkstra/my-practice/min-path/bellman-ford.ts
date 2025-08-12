import { reconstructPath } from './helper';
export type EdgeFull = [u: number, v: number, w: number];

export function bellmanFord(n: number, edges: EdgeFull[], src: number) {
  const dist = Array<number>(n).fill(Infinity);
  const parent = Array<number>(n).fill(-1);

  dist[src] = 0;

  for (let i = 1; i <= n - 1; i++) {
    let changed = false;
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        parent[v] = u;
        changed = true;
      }
    }
    if (!changed) break;
  }

  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      throw Error('Negative circle');
    }
  }

  return { dist, parent };
}

const edges: EdgeFull[] = [
  [0, 1, 2],
  [0, 2, 4],
  [1, 2, 1],
  [1, 3, 7],
  [2, 4, 3],
  [3, 4, 1],
];

const { dist, parent } = bellmanFord(5, edges, 0);
console.log('dist', dist);
console.log('parent', parent);
console.log('Path from 0 to 4: ', reconstructPath(parent, 0, 4));
