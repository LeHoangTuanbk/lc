export function allPathsSourceTarget(graph: number[][]): number[][] {
  const res: number[][] = [];
  const n = graph.length;
  const visited = Array(n).fill(false);
  backtrack(0, [0], visited, res, graph, n);
  return res;
}

function backtrack(
  u: number,
  path: number[],
  visited: boolean[],
  res: number[][],
  graph: number[][],
  n: number,
) {
  if (u === n - 1) {
    res.push([...path]);
  }

  for (const v of graph[u]) {
    if (visited[v]) continue;
    visited[v] = true;
    path.push(v);
    backtrack(v, path, visited, res, graph, n);

    visited[v] = false;
    path.pop();
  }
}
