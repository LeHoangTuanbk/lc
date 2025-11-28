export function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const num: number[] = Array(n).fill(0);
  const low = Array(n).fill(0);
  let count = 0;
  const bridges: number[][] = [];

  function dfs(u: number, parent: number = -1) {
    low[u] = num[u] = count + 1;
    count++;

    for (const v of graph[u]) {
      if (v === parent) continue;

      if (num[v] === 0) {
        // haven't visited
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
      } else {
        // already visited, back edge
        low[u] = Math.min(low[u], num[v]);
      }

      if (num[u] < low[v]) {
        bridges.push([u, v]);
      }
    }
  }

  dfs(0);

  return bridges;
}
