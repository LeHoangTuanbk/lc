function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const inf = 10e9;
  const adjList: number[][] = [...Array(n)].map(() => []);
  for (const edge of edges) {
    adjList[edge[0]].push(edge[1]);
    adjList[edge[1]].push(edge[0]);
  }
  const distance: number[] = Array(n).fill(inf);
  const queue: number[] = [];
  const visited: boolean[] = Array(n).fill(false);
  queue.push(source);
  visited[source] = true;
  distance[source] = 0;
  while (queue.length) {
    const u = queue.shift()!;
    for (const v of adjList[u]) {
      if (!visited[v]) {
        visited[v] = true;
        distance[v] = distance[u] + 1;
        queue.push(v);
      }
    }
  }
  return distance[destination] < inf;
}

function validPath2(n: number, edges: number[][], source: number, destination: number): boolean {
  const adjList: number[][] = [...Array(n)].map(() => []);
  for (const edge of edges) {
    adjList[edge[0]].push(edge[1]);
    adjList[edge[1]].push(edge[0]);
  }
  const queue: number[] = [];
  const visited: boolean[] = Array(n).fill(false);
  queue.push(source);
  visited[source] = true;
  while (queue.length) {
    const u = queue.shift()!;
    for (const v of adjList[u]) {
      if (!visited[v]) {
        if (v === destination) return true;
        visited[v] = true;
        queue.push(v);
      }
    }
  }
  return visited[destination];
}
