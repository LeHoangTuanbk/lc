import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function minimumCostWithDiscount(n: number, highways: number[][], discount: number): number {
  const dist: number[][] = Array.from({ length: n }, () => Array(discount + 1).fill(Infinity));
  dist[0][0] = 0;

  const graph: [number, number][][] = Array.from({ length: n }, () => []);
  for (const [u, v, w] of highways) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const pq = new MinPriorityQueue<{ node: number; used: number; cost: number }>({
    compare: (a, b) => a.cost - b.cost,
  });
  pq.enqueue({ node: 0, used: 0, cost: 0 });

  while (!pq.isEmpty()) {
    const { node, used, cost } = pq.dequeue();
    if (dist[node][used] < cost) continue;

    for (const [v, w] of graph[node]) {
      // don't use discount
      if (cost + w < dist[v][used]) {
        dist[v][used] = cost + w;
        pq.enqueue({ node: v, used, cost: cost + w });
      }
      // use discount
      if (used < discount) {
        const discountedCost = cost + Math.floor(w / 2);
        if (discountedCost < dist[v][used + 1]) {
          dist[v][used + 1] = discountedCost;
          pq.enqueue({ node: v, used: used + 1, cost: discountedCost });
        }
      }
    }
  }

  return Math.min(...dist[n - 1]);
}

const n = 5,
  highways = [
    [0, 1, 4],
    [2, 1, 3],
    [1, 4, 11],
    [3, 2, 3],
    [3, 4, 2],
  ],
  discounts = 1;
console.log(minimumCostWithDiscount(n, highways, discounts));
/* 
Input: n = 5, highways = [[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], discounts = 1
Output: 9
Explanation:
Go from 0 to 1 for a cost of 4.
Go from 1 to 4 and use a discount for a cost of 11 / 2 = 5.
The minimum cost to go from 0 to 4 is 4 + 5 = 9.


Input: n = 4, highways = [[1,3,17],[1,2,7],[3,2,5],[0,1,6],[3,0,20]], discounts = 20
Output: 8
Explanation:
Go from 0 to 1 and use a discount for a cost of 6 / 2 = 3.
Go from 1 to 2 and use a discount for a cost of 7 / 2 = 3.
Go from 2 to 3 and use a discount for a cost of 5 / 2 = 2.
The minimum cost to go from 0 to 3 is 3 + 3 + 2 = 8.
*/
