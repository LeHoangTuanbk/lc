import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [u: number, v: number, w: number];

// assumption: graph of size N node, index from 0 to N-1
export function kruskal(graph: Edge[], n: number) {
  const vs = []; // collection of vertices
  const root = Array.from({ length: n }, (_, i) => i);

  function getRoot(u: number) {
    if (u === root[u]) return u;
    while (root[u] != root[root[u]]) {
      root[u] = getRoot(root[u]);
    }

    return root[u];
  }

  const edges = graph.sort((a, b) => a[2] - b[2]);
  console.log(edges);

  const mst: Edge[] = [];

  for (const [u, v, w] of edges) {
    const rootU = getRoot(u);
    const rootV = getRoot(v);

    if (rootU !== rootV) {
      mst.push([u, v, w]);
      root[rootV] = rootU;
    }
  }

  return mst;
}

type Graph = [to: number, weight: number][];

export function prim(graph: Graph[]) {
  const n = graph.length;
  const mst = [];
  const mstNodes = new Set();
  const dist = Array(n).fill(Infinity);

  const heap = new MinPriorityQueue<{ u: number; v: number; w: number }>({
    compare: (a, b) => a.w - b.w,
  });

  heap.enqueue({ u: 0, v: 0, w: 0 });
  while (heap.size && mstNodes.size < n) {
    const { u, v, w } = heap.dequeue();
    if (mstNodes.has(v)) continue;
    mstNodes.add(v);
    mst.push([u, v, w]);

    for (const u in graph[v]) {
      const dCurU = graph[v][u];
      if (dist[u] > dCurU) {
        dist[u] = dCurU;
        heap.enqueue({u: , v: , w: })
      }
    }
  }

  return mst;
}

const edges: Edge[] = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 3],
  [2, 3, 3],
];

const mstKruskal = kruskal(edges, 4);
console.log(mstKruskal);

function buildAdjacencyList(n: number, edges: Edge[]): Graph {
  const graph: Graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  return graph;
}

const graph = buildAdjacencyList(4, edges);
const mst = prim(graph);
