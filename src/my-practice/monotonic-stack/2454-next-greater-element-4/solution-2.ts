import { MinPriorityQueue } from '@datastructures-js/priority-queue';

export function secondGreaterElement(nums: number[]): number[] {
  const n = nums.length;
  const res = Array(n).fill(-1);

  type Node = { val: number; idx: number };
  const firstPQ = new MinPriorityQueue<Node>({ compare: (a, b) => a.val - b.val });
  const secondPQ = new MinPriorityQueue<Node>({ compare: (a, b) => a.val - b.val });

  for (let i = 0; i < n; i++) {
    while (!secondPQ.isEmpty() && nums[i] > secondPQ.front().val) {
      const { idx } = secondPQ.dequeue();
      res[idx] = nums[i];
    }

    while (!firstPQ.isEmpty() && nums[i] > firstPQ.front().val) {
      secondPQ.enqueue(firstPQ.dequeue());
    }

    firstPQ.enqueue({ val: nums[i], idx: i });
  }

  return res;
}

const nums = [2, 4, 0, 9, 6];
console.log(secondGreaterElement(nums));
