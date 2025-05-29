function dfs(cur: number, graph: number[][], visited: boolean[], path: boolean[]): boolean {
  visited[cur] = true;
  path[cur] = true;
  for (let u of graph[cur]) {
    if (visited[u]) {
      if (path[u]) {
        return false;
      }
      continue;
    }
    if (!dfs(u, graph, visited, path)) {
      return false;
    }
  }
  path[cur] = false;
  return true;
}

function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  const visited = Array(n).fill(false);
  const path = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }
    dfs(i, graph, visited, path);
  }

  const res: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!path[i]) {
      res.push(i);
    }
  }

  return res;
}

function checkCircle(graph: number[][]): boolean {
  const n = graph.length;
  const visited = Array(n).fill(false);
  const path = Array(n).fill(false);

  function dfs(u: number): boolean {
    visited[u] = true;
    path[u] = true;

    for (const v of graph[u]) {
      if (!visited[v]) {
        if (dfs(v)) return true;
      } else if (path[v]) {
        return true; // Back edge → cycle
      }
    }

    path[u] = false;
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (dfs(i)) return true;
    }
  }

  return false;
}
