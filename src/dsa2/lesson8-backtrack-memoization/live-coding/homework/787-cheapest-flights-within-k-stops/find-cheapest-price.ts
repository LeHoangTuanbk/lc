export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, price] of flights) {
    graph[u].push([v, price]);
  }

  let best = Infinity;
  const visited = Array(n).fill(false);

  function dfs(currentNode: number, k: number, cost: number): number {
    if (currentNode === dst) {
      best = Math.min(best, cost);
      return;
    }

    if (k < 0) {
      return;
    }

    for (const [v, price] of graph[currentNode]) {
      if (visited[v]) continue;
      visited[v] = true;
      dfs(v, k - 1, cost + price);
      visited[v] = false;
    }
  }
  visited[src] = true;
  dfs(src, k, 0);
  return best === Infinity ? -1 : best;
}

const n = 4,
  flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
  ],
  src = 0,
  dst = 3,
  k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k));
