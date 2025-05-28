export function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const colors: number[] = Array(n).fill(0); // 0: unvisited, 1: Se A, 2: Set B
  for (let i = 0; i < n; i++) {
    if (colors[i]) {
      continue;
    }
    if (!dfs(i, colors, graph, 1)) {
      return false;
    }
  }

  function dfs(cur: number, colors: number[], graph: number[][], color: number): boolean {
    if (colors[cur]) {
      return colors[cur] === color;
    }
    colors[cur] = color;
    const nextColor: number = color === 1 ? 2 : 1;
    for (const u of graph[cur]) {
      if (!dfs(u, colors, graph, nextColor)) {
        return false;
      }
    }
    return true;
  }

  return true;
}

const graph = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
];
const expectedOutput = false;
isBipartite(graph);
