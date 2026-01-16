import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const res: number[][] = [];
  const n = nums1.length,
    m = nums2.length;

  if (n === 0 || m === 0 || k === 0) return res;

  type Node = {
    sum: number;
    i: number;
    j: number;
  };

  const pq = new MinPriorityQueue<Node>((x) => x.sum);
  const visited = new Set<string>();

  pq.enqueue({ sum: nums1[0] + nums2[0], i: 0, j: 0 });
  visited.add('0,0');

  while (!pq.isEmpty() && res.length < k) {
    const { i, j } = pq.dequeue();
    res.push([nums1[i], nums2[j]]);

    if (i + 1 < n) {
      const key = `${i + 1},${j}`;
      if (!visited.has(key)) {
        pq.enqueue({
          sum: nums1[i + 1] + nums2[j],
          i: i + 1,
          j,
        });
        visited.add(key);
      }
    }

    if (j + 1 < m) {
      const key = `${i},${j + 1}`;
      if (!visited.has(key)) {
        pq.enqueue({ sum: nums1[i] + nums2[j + 1], i, j: j + 1 });
      }
      visited.add(key);
    }
  }
  return res;
}
