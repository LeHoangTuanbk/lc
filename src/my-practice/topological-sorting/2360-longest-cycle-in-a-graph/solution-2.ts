function longestCycle(edges: number[]): number {
  const n = edges.length;
  const visited = Array(n).fill(false);
  const inStack = Array(n).fill(false);
  const depth = Array(n).fill(-1);
  let res = -1;

  function dfs(u: number, d: number) {
    visited[u] = true;
    inStack[u] = true;
    depth[u] = d;

    const v = edges[u];
    if (v !== -1) {
      if (!visited[v]) {
        dfs(v, d + 1);
      } else if (inStack[v]) {
        res = Math.max(res, d - depth[v] + 1);
      }
    }

    inStack[u] = false;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, 0);
    }
  }

  return res;
}

const edges = [3, 3, 4, 2, 3];

console.log(longestCycle(edges));
