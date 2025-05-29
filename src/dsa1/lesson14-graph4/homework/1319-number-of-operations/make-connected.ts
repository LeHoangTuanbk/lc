function dfs(cur: number, graph: number[][], visited: boolean[]) {
  visited[cur] = true;
  for (const u of graph[cur]) {
    if (visited[u]) {
      continue;
    }
    dfs(u, graph, visited);
  }
}

export function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1;
  }
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const edge of connections) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  const visited = Array(n).fill(false);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    dfs(i, graph, visited);
    res++;
  }
  return res - 1;
}
