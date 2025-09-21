import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [u: number, v: number, w: number];
type Graph = [to: number, weight: number][];

export function prim(graph: Graph[]) {
  const n = graph.length;
  const mst: Edge[] = [];
  const mstNodes = new Set<number>();
  const dist = Array(n).fill(Infinity);

  const heap = new MinPriorityQueue<{ u: number; v: number; w: number }>({
    compare: (a, b) => a.w - b.w,
  });

  heap.enqueue({ u: 0, v: 0, w: 0 }); // start from node 0

  while (!heap.isEmpty() && mstNodes.size < n) {
    const { u, v, w } = heap.dequeue();
    if (mstNodes.has(v)) continue;

    mstNodes.add(v);
    mst.push([u, v, w]);

    for (const [to, weight] of graph[v]) {
      if (!mstNodes.has(to) && weight < dist[to]) {
        dist[to] = weight;
        heap.enqueue({ u: v, v: to, w: weight });
      }
    }
  }

  return mst.slice(1); // bỏ edge giả [0, 0, 0]
}

function buildAdjacencyList(n: number, edges: Edge[]): Graph[] {
  const graph: Graph[] = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  return graph;
}

const edges: Edge[] = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 3],
  [2, 3, 3],
];

const graph = buildAdjacencyList(4, edges);
const mstPrim = prim(graph);
console.log('Prim MST:', mstPrim);
