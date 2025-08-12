export type Edge = [to: number, w: number];

export function reconstructPath(parent: number[], start: number, target: number) {
  const path: number[] = [];
  let cur = target;
  while (cur !== -1) {
    path.push(cur);
    // if (cur === start) break;
    cur = parent[cur];
  }
  // if (path[path.length - 1] !== start) return [];
  return path.reverse();
}

export function buildGraph(n: number, edges: [number, number, number][], directed: true): Edge[][] {
  const g: Edge[][] = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    g[u].push([v, w]);
    if (!directed) g[v].push([u, w]);
  }
  return g;
}
