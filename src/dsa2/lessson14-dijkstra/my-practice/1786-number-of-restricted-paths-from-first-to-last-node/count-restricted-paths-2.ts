import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [number, number]; // v, w

export function countRestrictedPaths(n: number, edges: number[][]): number {
  // Logic: calculate dist from n to all nodes
  //count the restricted path, use backtrack or dfs
  const graph: Edge[][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }
  const dist: number[] = Array(n + 1).fill(Infinity);
  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);
  pq.push({ u: n, d: 0 });
  dist[n] = 0;

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();
    if (d !== dist[u]) continue;
    for (const [v, w] of graph[u]) {
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.enqueue({ u: v, d: nd });
      }
    }
  }

  const MOD = 1e9 + 7;
  const memo = Array(n + 1).fill(-1);
  memo[n] = 1;
  function dfs(u: number) {
    if (u == n) {
      return 1;
    }
    if (memo[u] !== -1) return memo[u];
    let cnt = 0;
    for (const [v, _] of graph[u]) {
      if (dist[u] > dist[v]) {
        const tempCount = dfs(v);
        cnt += tempCount > MOD ? tempCount - MOD : tempCount;
      }
    }
    memo[u] = cnt > MOD ? cnt - MOD : cnt;
    return cnt;
  }
  dfs(1);
  return memo[1];
}

const n = 5,
  edges = [
    [1, 2, 3],
    [1, 3, 3],
    [2, 3, 1],
    [1, 4, 2],
    [5, 2, 2],
    [3, 5, 1],
    [5, 4, 10],
  ];
console.log(countRestrictedPaths(n, edges));
