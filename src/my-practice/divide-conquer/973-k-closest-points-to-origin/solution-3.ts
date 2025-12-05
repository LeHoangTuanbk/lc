import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

export function kClosest(points: number[][], k: number): number[][] {
  const pq = new MaxPriorityQueue<[number[], number]>((e) => e[1]);
  for (const p of points) {
    const dist = p[0] * p[0] + p[1] * p[1];
    pq.enqueue([p, dist]);
    if (pq.size() > k) pq.dequeue();
  }
  return pq.toArray().map((e) => e[0]);
}
const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
console.log(kClosest(points, k));
