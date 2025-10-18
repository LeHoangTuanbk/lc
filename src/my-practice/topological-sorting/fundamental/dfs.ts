export function topoSortDFS(n: number, edges: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) graph[u].push(v);

  const visited: number[] = Array(n).fill(0); // 0: unvisited, 1 = visiting, 2 = visited
  const res: number[] = [];
  let hasCycle = false;

  function dfs(u: number) {
    if (visited[u] === 1) {
      hasCycle = true;
      return;
    }
    if (visited[u] === 2) return;

    visited[u] = 1;
    for (const v of graph[u]) dfs(v);
    visited[u] = 2;
    res.push(u);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) dfs(i);
  }

  return hasCycle ? [] : res.reverse();
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

console.log(topoSortDFS(n, edges));
