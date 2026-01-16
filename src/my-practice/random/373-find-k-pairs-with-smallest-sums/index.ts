import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const res: number[][] = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return res;

  const pq = new MinPriorityQueue<[number, number, number]>((x) => x[0]);

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    pq.enqueue([nums1[i] + nums2[0], i, 0]);
  }

  while (!pq.isEmpty() && res.length < k) {
    const [_, i, j] = pq.dequeue();
    res.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      pq.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return res;
}
