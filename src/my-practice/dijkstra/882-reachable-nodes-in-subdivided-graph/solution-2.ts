export function reachableNodes(edges: number[][], maxMoves: number, n: number): number {
  let idx = n;
  const virtualEdges: number[][] = [];

  for (const [u, v, cnt] of edges) {
    let prev = u;
    for (let i = 0; i < cnt; i++) {
      virtualEdges.push([prev, idx]);
      prev = idx++;
    }
    virtualEdges.push([prev, v]);
  }

  const graph: number[][] = Array.from({ length: idx }, () => []);
  for (const [u, v] of virtualEdges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = Array(idx).fill(false);
  visited[0] = true;

  let res = 1;
  let currQueue: number[] = [0];
  let moves = 0;

  while (currQueue.length && moves < maxMoves) {
    const nextQueue: number[] = [];
    for (const u of currQueue) {
      for (const v of graph[u]) {
        if (!visited[v]) {
          visited[v] = true;
          res++;
          nextQueue.push(v);
        }
      }
    }
    currQueue = nextQueue;
    moves++;
  }

  return res;
}
