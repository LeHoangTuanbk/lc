export function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const num = Array(n).fill(-1);
  const low = Array(n).fill(-1);
  const bridges: [number, number][] = [];

  let time = 0;

  function dfs(u: number, parent: number | null) {
    num[u] = low[u] = time++;

    for (const v of graph[u]) {
      if (v === parent) continue;

      if (num[v] !== -1) {
        low[u] = Math.min(low[u], num[v]);
      } else {
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > num[u]) {
          bridges.push([u, v]);
        }
      }
    }
  }

  for (let u = 0; u < n; u++) {
    if (num[u] === -1) {
      dfs(u, null);
    }
  }

  return bridges;
}

const n = 4,
  connections = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ];
console.log(criticalConnections(n, connections));
