import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

export function reachableNodes(edges: number[][], maxMoves: number, n: number): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, cnt] of edges) {
    graph[u].push([v, cnt]);
    graph[v].push([u, cnt]);
  }

  const movesLeft = Array(n).fill(-1);
  const pq = new MaxPriorityQueue<{ node: number; moves: number }>((item) => item.moves);
  pq.enqueue({ node: 0, moves: maxMoves });

  while (!pq.isEmpty()) {
    const { node, moves } = pq.dequeue();
    if (moves <= movesLeft[node]) continue;
    movesLeft[node] = moves;

    for (const [v, cost] of graph[node]) {
      const nextMoves = moves - cost - 1;
      if (nextMoves >= 0) {
        pq.enqueue({ node: v, moves: nextMoves });
      }
    }
  }

  let res = movesLeft.filter((x) => x >= 0).length;

  for (const [u, v, cnt] of edges) {
    const a = movesLeft[u] >= 0 ? Math.min(cnt, movesLeft[u]) : 0;
    const b = movesLeft[v] >= 0 ? Math.min(cnt, movesLeft[v]) : 0;
    res += Math.min(cnt, a + b);
  }

  return res;
}

const edges = [
    [4, 6, 11],
    [5, 6, 2],
    [2, 6, 11],
    [0, 3, 19],
    [1, 7, 21],
    [5, 7, 1],
    [1, 5, 4],
    [0, 7, 12],
    [6, 7, 3],
    [3, 6, 22],
    [0, 5, 24],
    [1, 2, 8],
    [3, 7, 11],
    [1, 3, 14],
    [4, 5, 7],
    [4, 7, 14],
    [0, 4, 5],
    [2, 4, 7],
    [3, 4, 11],
    [3, 5, 15],
    [2, 5, 13],
    [2, 3, 6],
    [1, 4, 6],
    [0, 2, 3],
    [1, 6, 20],
  ],
  maxMoves = 18,
  n = 8;
console.log(reachableNodes(edges, maxMoves, n));
