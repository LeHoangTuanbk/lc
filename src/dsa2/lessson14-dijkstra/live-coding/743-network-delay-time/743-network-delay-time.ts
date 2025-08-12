import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Edge = [number, number];

export function networkDelayTime2(times: number[][], n: number, k: number): number {
  const graph: Edge[][] = Array.from({ length: n }, () => []);
  for (const [u, v, w] of times) {
    graph[u - 1].push([v - 1, w]);
  }
  const distance: number[] = Array(n).fill(Infinity);
  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);

  distance[k - 1] = 0;
  pq.enqueue({ u: k, d: 0 });

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();

    for (const [v, w] of graph[u - 1]) {
      const nextDis = d + w;
      if (nextDis < distance[v]) {
        distance[v] = nextDis;
        pq.enqueue({ u: v, d: nextDis });
      }
    }
  }

  const maxDis = Math.max(...distance);

  return maxDis === Infinity ? -1 : maxDis;
}

export function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph: Edge[][] = Array.from({ length: n }, () => []);
  for (const [u, v, w] of times) {
    graph[u - 1].push([v - 1, w]);
  }
  const distance: number[] = Array(n).fill(Infinity);
  const pq = new MinPriorityQueue<{ u: number; d: number }>((x) => x.d);

  distance[k - 1] = 0;
  pq.enqueue({ u: k - 1, d: 0 });

  while (!pq.isEmpty()) {
    const { u, d } = pq.dequeue();
    for (const [v, w] of graph[u]) {
      const nextDis = d + w;
      if (nextDis < distance[v]) {
        distance[v] = nextDis;
        pq.enqueue({ u: v, d: nextDis });
      }
    }
  }

  const maxDis = Math.max(...distance);

  return maxDis === Infinity ? -1 : maxDis;
}
