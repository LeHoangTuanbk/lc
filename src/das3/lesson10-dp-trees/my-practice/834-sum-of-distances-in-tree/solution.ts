export function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const count: number[] = Array(n).fill(1);
  const ans: number[] = Array(n).fill(0);

  function dfs1(u: number, parent: number) {
    for (const v of graph[u]) {
      if (v === parent) continue;
      dfs1(v, u);
      count[u] += count[v];
      ans[u] += ans[v] + count[v];
    }
  }

  function dfs2(u: number, parent: number) {
    for (const v of graph[u]) {
      if (v === parent) continue;
      ans[v] = ans[u] - count[v] + (n - count[v]);
      dfs2(v, u);
    }
  }

  dfs1(0, -1);
  dfs2(0, -1);
  return ans;
}
