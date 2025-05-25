// Adjacency Edges List
export function bfs(adj: number[][], start: number): number[] {
  const v = adj.length;
  const visited = Array(v).fill(false);
  const queue: number[] = [];
  queue.push(start);
  visited[start] = true;
  const res: number[] = [];
  while (queue.length) {
    const node = queue.shift()!;
    res.push(node);
    for (const adjNode of adj[node]) {
      if (!visited[adjNode]) {
        visited[adjNode] = true;
        queue.push(adjNode);
      }
    }
  }
  return res;
}

export function bfsWithDistance(adj: number[][], start: number) {
  const v = adj.length;
  const visited = Array(v).fill(false);
  const queue: number[] = [];
  queue.push(start);
  visited[start] = true;
  const res: number[] = [];
  const distance: number[] = Array(v);
  distance[start] = 0;
  while (queue.length) {
    const node = queue.shift()!;
    res.push(node);
    for (const adjNode of adj[node]) {
      if (!visited[adjNode]) {
        visited[adjNode] = true;
        queue.push(adjNode);
        distance[adjNode] = distance[node] + 1;
      }
    }
  }
  return {
    res,
    distance,
  };
}
const graph = [[1, 2], [0, 3, 4], [0, 5], [1], [1], [2]];

console.log(bfs(graph, 0));
console.log(bfsWithDistance(graph, 0));
