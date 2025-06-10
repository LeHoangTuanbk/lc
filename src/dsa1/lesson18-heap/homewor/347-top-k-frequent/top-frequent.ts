import { PriorityQueue } from '@datastructures-js/priority-queue';

export function topKFrequent(nums: number[], k: number): number[] {
  // make freq map : n
  // create a min heap by freq : nlogk
  // pop element: klogk
  const freq: Map<number, number> = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const minPQ: PriorityQueue<[number, number]> = new PriorityQueue((a, b) => {
    return a[1] - b[1];
  });
  for (const [key, value] of freq.entries()) {
    minPQ.enqueue([key, value]);
    if (minPQ.size() > k) {
      minPQ.dequeue();
    }
  }

  let res: number[] = [];
  while (!minPQ.isEmpty()) {
    res.push(minPQ.dequeue()[0]);
  }

  return res;
}

export function topKFrequent2(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const bucket: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, f] of freq.entries()) {
    bucket[f].push(num);
  }

  const res: number[] = [];
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
    for (const num of bucket[i]) {
      res.push(num);
      if (res.length === k) break;
    }
  }

  return res;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
