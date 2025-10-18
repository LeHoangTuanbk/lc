export function topoSortKahn(n: number, edges: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  for (const [u, v] of edges) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const res: number[] = [];
  while (queue.length > 0) {
    const u = queue.shift();
    res.push(u);
    for (const v of graph[u]) {
      if (--inDegree[v] === 0) queue.push(v);
    }
  }

  return res.length === n ? res : [];
}

const edges: number[][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 1],
  [5, 2],
];
const n = 6;

console.log(topoSortKahn(n, edges));
