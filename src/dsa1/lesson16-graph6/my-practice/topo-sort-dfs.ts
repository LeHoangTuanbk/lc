export function topologicalSortDFS(n: number, graph: number[][]) {
  const visited: boolean[] = Array(n).fill(false);
  const onPath = Array(n).fill(false);
  let hasCycle = false;

  const res: number[] = [];

  function dfs(cur: number, visited: boolean[], graph: number[][], res: number[]) {
    if (onPath[cur]) {
      hasCycle = true;
      return;
    }
    if (visited[cur]) return;
    visited[cur] = true;
    onPath[cur] = true;
    for (const u of graph[cur]) {
      dfs(u, visited, graph, res);
      if (hasCycle) return;
    }
    onPath[cur] = false;
    res.push(cur);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i, visited, graph, res);
    if (hasCycle) return [];
  }
  return res.reverse();
}

const graph2 = [
  [], // 0
  [], // 1
  [3], // 2 → 3
  [1], // 3 → 1
  [], // 4
  [2, 4], // 5 → 2, 4
];
console.log(topologicalSortDFS(6, graph2)); // [ 0, 5, 2, 4, 3, 1 ]

const graphCycle = [
  [1], // 0 → 1
  [2], // 1 → 2
  [0], // 2 → 0
];
console.log(topologicalSortDFS(3, graphCycle)); // ✅ Expected: []
