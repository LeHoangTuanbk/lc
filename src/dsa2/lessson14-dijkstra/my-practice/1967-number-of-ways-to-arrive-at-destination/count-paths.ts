import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function countPaths(n: number, roads: number[][]): number {
  const MOD = 1e9 + 7;

  const graph: [number, number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const dist = Array(n).fill(Infinity);
  const ways = Array(n).fill(0);
  dist[0] = 0;
  ways[0] = 1;

  const pq = new MinPriorityQueue<{ u: number; time: number }>((x) => x.time);
  pq.enqueue({ u: 0, time: 0 });

  while (!pq.isEmpty()) {
    const { u, time } = pq.dequeue();
    if (time > dist[u]) continue;
    for (const [v, w] of graph[u]) {
      const newTime = time + w;
      if (newTime < dist[v]) {
        dist[v] = newTime;
        ways[v] = ways[u];
        pq.enqueue({ u: v, time: newTime });
      } else if (newTime === dist[v]) {
        ways[v] = (ways[v] + ways[u]) % MOD;
      }
    }
  }

  return ways[n - 1];
}

const n = 7,
  roads = [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ];

console.log(countPaths(n, roads));
/* 
Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4
Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

*/
