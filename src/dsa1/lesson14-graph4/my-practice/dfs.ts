function dfsTraversal(n: number, graph: Map<number, number[]>) {
  const visited = Array(n).fill(false);
  const res: number[] = [];
  function dfs(u: number) {
    visited[u] = true;
    res.push(u);
    for (const v of graph.get(u)!) {
      if (!visited[v]) {
        dfs(v);
      }
    }
    console.log(u);
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  return res;
}

const n = 4;
const graph = new Map<number, number[]>();
graph.set(0, [1, 2]);
graph.set(1, [0, 3]);
graph.set(2, [0]);
graph.set(3, [1]);

console.log(dfsTraversal(n, graph));
