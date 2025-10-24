export function allTopologicalSorts(n: number, edges: [number, number][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree = Array(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    inDegree[v]++;
  }

  const visited = Array(n).fill(false);
  const path: number[] = [];
  const result: number[][] = [];

  function backtrack() {
    if (path.length === n) {
      result.push([...path]);
      return;
    }

    for (let u = 0; u < n; u++) {
      if (!visited[u] && inDegree[u] === 0) {
        visited[u] = true;
        path.push(u);

        for (const v of graph[u]) {
          inDegree[v]--;
        }

        backtrack();

        for (const v of graph[u]) {
          inDegree[v]++;
        }

        visited[u] = false;
        path.pop();
      }
    }
  }

  backtrack();

  return result;
}

// Node 0 → 1, 0 → 2, 1 → 3, 2 → 3
console.log(
  allTopologicalSorts(4, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ]),
);
// Output:
// [
//   [0, 1, 2, 3],
//   [0, 2, 1, 3]
// ]
