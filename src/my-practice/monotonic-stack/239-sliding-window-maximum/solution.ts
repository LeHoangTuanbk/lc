import { MaxPriorityQueue, PriorityQueue } from '@datastructures-js/priority-queue';

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = [];
  const pq = new MaxPriorityQueue<{ val: number; idx: number }>({
    compare: (a, b) => a.val - b.val,
  });

  const n = nums.length;

  for (let i = 0; i < n; i++) {
    pq.enqueue({ val: nums[i], idx: i });
    if (i >= k - 1) {
      while (pq.front().idx <= i - k) {
        pq.dequeue();
      }
      res.push(pq.front().val);
    }
  }
  return res;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
